import React from 'react';

const Recipes = ({ recipes }) => {
    return (
        <div>
            {recipes.map((recipe) => {
                return (
                <div>
                    <h2>title</h2>
                    <p>Source</p>
                    <p>Ingredients</p>
                    <p>Instructions</p>
                    <p>Category</p>
                </div>
                )
            })}
        </div>
    )
}
export default Recipes