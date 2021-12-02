import React, { Component } from 'react';
import '../App.css';
import {Routes, Link, Route} from 'react-router-dom';

class About extends Component {

    render() {

        return (
            <div className="App">
                <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center mt-2">
                        <Link className="btn btn-primary mr-2 mt-2" to="/">Home</Link>
                        <Link className="btn btn-primary mr-2 mt-2" to="/about">About</Link>
                      </div>
                  </div>
                  <h1>About the web</h1>
                  <div>
                    <h4>website ini merupakan website yang memperlihatkan daftar standing di setiap liga sepakbola yang dimana datanya di ambil dari football-data API</h4>
                  </div>
                  <div>
                    <p>Nama: Halid, Muhammad</p>
                    <p>Prodi: Informatika</p>
                  </div>
                </div>
            </div>
        );
    }
}

export default About;
