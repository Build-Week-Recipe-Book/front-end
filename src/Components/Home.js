import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import photo from './FoodPhoto.jpg'
 
function Home() {

    const { url } = useRouteMatch()

    return (
        <HomeDiv>
            <h1>Welcome to Secret Family Recipes!</h1>
            <br/>
            <MainImg src = {photo} alt = 'Food Photo' />
            <br/>
            <ButtonDiv>
                <Link to = {`${url}login`}><Button id = "login-button">Login</Button></Link>
                <Link to = {`${url}sign-up`}><Button id = "sign-up">Sign Up</Button></Link>
            </ButtonDiv>
        </HomeDiv>
    )
}

const HomeDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
`

const MainImg = styled.img`
height: 65vh;
`

const ButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 20%;
`

const Button = styled.button`
background: maroon;
color: white;
height: 30px;
border-radius: 5px;
`

export default Home