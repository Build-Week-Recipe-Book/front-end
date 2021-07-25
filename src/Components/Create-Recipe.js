import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import photo from './FoodPhoto5.jpg'

function CreateRecipe() {

    const [ ingredients, setIngredients ] = useState([{ value: null }])
    const [ instructions, setInstructions ] = useState([{ value: null }])
    const [ title, setTitle ] = useState('')
    const [ source, setSource ] = useState('')
    const [ category, setCategory ] = useState('')

    const [ recipeValues, setRecipeValues ] = useState({
        title: '',
        source: '',
        ingredients: [],
        instructions: [],
        category: ''
    })

    function handleChange(i, event) {
        const values = [...ingredients];
        values[i].value = event.target.value;
        setIngredients(values);
    }

    function handleAdd() {
        const values = [...ingredients];
        values.push({ value: null });
        setIngredients(values);
    }

    function handleRemove(i) {
        const values = [...ingredients];
        values.splice(i, 1);
        setIngredients(values);
    }

    function handleChange2(i, event) {
        const values = [...instructions];
        values[i].value = event.target.value;
        setInstructions(values);
    }

    function handleAdd2() {
        const values = [...instructions];
        values.push({ value: null });
        setInstructions(values);
    }

    function handleRemove2(i) {
        const values = [...instructions];
        values.splice(i, 1);
        setInstructions(values);
    }

    function onClick() {
        setRecipeValues({
            title: title,
            source: source,
            ingredients: ingredients,
            instructions: instructions,
            category: category
        })
        console.log(recipeValues)
        axios.post('/api/recipes', recipeValues)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <HomeDiv>
            <LeftDiv>
                <h2>Here you can enter the details of your recipe.</h2>
                <div>
                    <Form id = "new-recipe" >
                        <p>Recipe Name: <input id="title" name = "title" type = "text"  onChange = { (evt) => setTitle(evt.target.value)} /></p>
                        <p>Recipe Source: <input id = "source" name = "source" type = "text"  onChange = { (evt) => setSource(evt.target.value)} /></p>
                        <p>Add Ingredients <button type = "button" onClick = {() => handleAdd()}> -+- </button></p>
                        {ingredients.map((ingredient, id) => {
                            return(
                                <div key = {`${ingredient}-${id}`}>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Ingredient"
                                        value = {ingredient[id]}
                                        onChange = {e => handleChange(id, e)}
                                    />
                                    <button type = "button" onClick = {() => handleRemove(id)}>X</button>
                                </div>
                            )
                        })}
                        <p>Add Instructions <button type = "button" onClick = {() => handleAdd2()}> -+- </button></p>
                        {instructions.map((instruction, id) => {
                            return(
                                <div key = {`${instruction}-${id}`}>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Ingredient"
                                        value = {instruction[id]}
                                        onChange = {e => handleChange2(id, e)}
                                    />
                                    <button type = "button" onClick = {() => handleRemove2(id)}>X</button>
                                </div>
                            )
                        })}
                        <p>Category: <select id = "category" name = "category" onChange = { (evt) => setCategory( evt.target.value )} >
                            <option value = ''>--Select Category--</option>
                            <option value = 'appetizer'>Appetizer</option>
                            <option value = 'poultry'>Poultry</option>
                            <option value = 'beef'>Beef</option>
                            <option value = 'pork'>Pork</option>
                            <option value = 'dessert'>Dessert</option>
                            <option value = 'other'>Other</option>
                        </select></p>
                        <br/>
                        <br/>
                        <Button type = "button" onClick = { onClick } >Submit</Button>
                    </Form>
                </div>
            </LeftDiv>
            <RightDiv>
                <MainImg src = {photo} alt = 'Food Photo' />
            </RightDiv>
        </HomeDiv>
    )
}

const HomeDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
width: 75%;
height: 100vh;
padding: 0 12.5%;
`

const LeftDiv = styled.div`
width: 50%;
padding: 5% 7.5%;
`

const Button = styled.button`
background: maroon;
color: white;
height: 30px;
border-radius: 5px;
`

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: white;
padding: 2%;
border: solid 3px black;
border-radius: 5%;
width: 50%;
`

const RightDiv = styled.div`
height: 100vh;
`

const MainImg = styled.img`
height: 85vh;
border-radius: 5%;
`

export default CreateRecipe