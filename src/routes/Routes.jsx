import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Navabr from '../pages/navbar/Navabr';
const Routes = () => {
  return (
    <div>
 <Router>
        <Navabr/>
      <Switch>
        {/* Define your routes here */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>

    </div>
  )
}

export default Routes