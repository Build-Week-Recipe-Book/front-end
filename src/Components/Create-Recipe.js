import axios from 'axios'
import React, { useState } from 'react'

function CreateRecipe() {

    const [ingredients, setIngredients] = useState([{ value: null }])
    const [instructions, setInstructions] = useState([{ value: null }])
    const [newTitle, setNewTitle] = useState('')
    const [newSource, setNewSource] = useState('')
    const [newCategory, setNewCategory] = useState('')

    const [recipe, setRecipe] = useState({
        title: '',
        source: '',
        ingredients: [],
        instructions: [],
        category: ''
    })

    const titleOnChange = evt => {
        const data = evt.target.value
        setNewTitle(data)
    }

    const sourceOnChange = evt => {
        const data = evt.target.value
        setNewSource(data)
    }

    const categoryOnChange = evt => {
        const data = evt.target.value
        setNewCategory(data)
    }

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

    function onSubmit(newTitle, newSource, ingredients, instructions, newCategory) {
        setRecipe({
            title: newTitle,
            source: newSource,
            ingredients: [ingredients],
            instructions: [instructions],
            category: [newCategory]
        }
        )
        console.log(recipe)
        axios.post('/api/recipes', recipe)
            .then(res => console.log(res))
            .err(err => console.log(err))
    }

    return(
        <div>
            <h2>Here you can enter the details of your recipe.</h2>
            <div>
                <form id = "new-recipe">
                    <p>Recipe Name: <input id="title" name = "title" type = "text" onChange = {titleOnChange} /></p>
                    <p>Recipe Source: <input id = "source" name = "source" type = "text" onChange = {sourceOnChange} /></p>
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
                    <p>Category: <select id = "category" name = "category" onChange={categoryOnChange} >
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
                    <button onSubmit = {onSubmit} >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe