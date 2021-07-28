import React from 'react';

const Recipes = ({ recipes }) => {
    console.log(recipes)
    return (
        <div>
            {recipes.map((recipe) => {
                return (
                <div>
                    <h2>{recipe.id}</h2>
                    <p>{recipe.email}</p>
                    <p>{recipe.first_name}</p>
                </div>
                )
            })}
        </div>
    )
}
export default Recipes