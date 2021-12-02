import React, { Component } from 'react';
import './App.css';
import Standing from './components/Standings';
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';
import About from './components/about.js'
import Home from './components/home.js'

class App extends Component {

    render() {

        return (
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        );
    }
}

export default App;
