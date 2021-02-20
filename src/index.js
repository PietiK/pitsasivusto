import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Etusivu } from './sivut/Etu/Etusivu.js'
import { Pohja } from './sivut/Pohja/Pohja.js'
import { Tayte } from './sivut/Tayte/Tayte.js'
import { Paisto } from './sivut/Paisto/Paisto.js'
import './Navbar.css'
import { Navbar } from './components/Navbar.js'
import { Footer } from './components/Footer.js'
import { ScrollToTop } from './ScrollToTop.js'
import './index.css'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"



const App = (props) => {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Etusivu} />
        <Route path='/pohja' component={Pohja} />
        <Route path='/tayte' component={Tayte} />
        <Route path='/paisto' component={Paisto} />
      </Switch>
      <Footer />
    </Router>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)