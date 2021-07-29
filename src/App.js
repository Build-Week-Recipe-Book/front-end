import React from 'react'
import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import Login from './Login';
import UserHome from './Components/UserHome';
import CreateRecipe from './Components/Create-Recipe'
import Nav from './Components/Nav'
import RecipeCard from './Components/RecipeCard';
import { ItemContext } from './Components/Context/ItemContext';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route id = 'login-button' path = "/login">
          <Nav />
          <Login />
        </Route>
        <Route id = 'sign-up' path = "/sign-up">
          <Nav />
          <SignUp />
        </Route>
        <Route id = 'user-home' path = "/user-home">
          <Nav />
          <UserHome />
        </Route>
        <Route id = 'create-recipe' path = "/create-recipe">
          <Nav />
          <CreateRecipe />
        </Route>
        <Route id = 'view-recipe' path = "/view-recipes">
          <Nav />
          <RecipeCard />
        </Route>
        <Route id = 'home' path="/">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;