import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import photo from './img/FoodPhoto2.jpg'
 
function UserHome() {

    return (
        <HomeDiv>
            <h1>Welcome to Secret Family Recipes!</h1>
            <br/>
            <MainImg src = {photo} alt = 'Food Photo' />
            <br/>
            <ButtonDiv>
                <Link to = {`/create-recipe`}><Button id = "create-recipe">Create Recipe</Button></Link>
                <Link to = {`/view-recipes`}><Button id = "view-recipes">View Recipes</Button></Link>
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

export default UserHome