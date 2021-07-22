import React from 'react'

const CreateRecipe = () => {

    return(
        <div>
            <h2>Here you can enter the details of your recipe.</h2>
            <div>
                <form id = "new-recipe">
                    <p>Recipe Name: <input id="title" name = "title" type = "text"  /></p>
                    <p>Recipe Source: <input id = "source" name = "source" type = "text"  /></p>
                    <p>Add Ingredients <button > -+- </button></p>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe