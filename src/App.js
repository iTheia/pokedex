import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pokedex from './container/Pokedex'
import Home from './container/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Pokedex} />
      </Switch>
    </Router>
  )
}

export default App
