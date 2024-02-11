import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Template from './views/template'
import Services from './views/services'
import Home from './views/home'
import About from './views/about'
import Collection from './views/collection'
import Home1backup from './views/home1backup'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Template} exact path="/template" />
        <Route component={Services} exact path="/services" />
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Collection} exact path="/collection" />
        <Route component={Home1backup} exact path="/home1backup" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
