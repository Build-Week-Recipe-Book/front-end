import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <MainDiv className = "header">
        <HeaderDiv>
            <h1>Secret Family Recipes</h1>
        </HeaderDiv>
        <NavDiv className = "navBar">
            <Link to="/" style = {linkStyle}> Home </Link>
            <Link to="/create-recipe" style = {linkStyle}>Create Recipe</Link>
            <Link to="/view-recipes" style = {linkStyle}> View Recipes </Link>  
            <Link to="/login" style = {linkStyle}> Login </Link>  
            <Link to="/sign-up" style = {linkStyle}> Sign Up </Link>
        </NavDiv>
    </MainDiv>
  );
};

const MainDiv = styled.div`
display: flex;
align-items: center;
flex-direction: row;
padding: 0 3%;
`

const NavDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 30%;
border: 0;
`

const HeaderDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
width: 70%;
border: 0;
`

const linkStyle = {
    textDecoration: "none",
    color: "black"
}

export default Nav