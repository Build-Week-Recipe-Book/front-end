import React from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import UserHome from './Components/UserHome';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route id = 'sign-up' path = "/sign-up">
          <SignUp />
        </Route>
        <Route id = 'user-home' path = "/user-home">
          <UserHome />
        </Route>
        <Route id = 'home' path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;