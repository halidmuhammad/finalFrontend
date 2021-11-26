import axios from 'axios'
import slug from 'slug'
const apiKey='1ff3bef3bffe4304ab651b9beb389276';
const baseUrl='http://localhost:8080/api'
const sports=['football','cricket','golf','tennis','rugby-league','rugby-union','boxing','horse-racing']

export function fetchArticle(articles, titleSlug) {
   const filtered = articles.filter((article) => {
     return slug(article.title).toLowerCase() === titleSlug})
   return filtered[0]
}

export function fetchLatest() {
  const uri = `${baseUrl}/getlatest/v1.0/`
  return axios.get(encodeURI(uri))
}

export function fetchArticles(sport) {
  const uri = `${baseUrl}/getnews/${sport}/v1.0/`
  return axios(encodeURI(uri),{
    method: 'GET'
  }).then((response) => (response.data))
}

export function fetchTeamArticles(team) {
  const teamSlug = slug(team).toLowerCase()
  const uri = `${baseUrl}/football/getteamnews/${teamSlug}/v1.0/`
  return axios(encodeURI(uri),{
    method: 'GET'
  }).then((response) => (response.data))
}

export function getArticleCategory(url) {
  const split = url.split('/')
  return split[3]
}

export function getArticleId(url) {
  const split = url.split('/')
  return split[6]
}

export function formatArticles(articles) {
  let formatted = []
  articles.map((article) => {
    const { title, imgsrc, link, shortdesc } =  article
    formatted.push({
      title,
      imgsrc,
      link,
      shortdesc,
      category: getArticleCategory(link),
      team: article.team ? article.team : null
    })
  })
  return formatted
}
