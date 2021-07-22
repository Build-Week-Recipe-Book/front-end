import React from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {



  return (
    <BrowserRouter>
      <Switch>
        <Route id = 'home' path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;