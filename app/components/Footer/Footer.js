import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
import './style.scss'

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="footer__inner container">
          <nav className="footer-nav">
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <Link to="/" className="footer-nav-link">
                  <span className="footer-nav-link__text">Home</span>
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/sports" className="footer-nav-link">
                  <span className="footer-nav-link__text">Sports</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
  }
}

export default withRouter(Footer)
