import React from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route id = 'login-button' path = "/login">
          <Login />
        </Route>
        <Route id = 'sign-up' path = "/sign-up">
          <SignUp />
        </Route>
        <Route id = 'home' path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;