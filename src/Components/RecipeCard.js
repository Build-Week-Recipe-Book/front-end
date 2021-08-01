import React, { Component } from 'react';
import Recipes from './Recipes';

export default class RecipeCard extends Component {

    state = {
        recipes: []
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then((data) => {
                let info = data.data;
                console.log(info)
                this.setState({ recipes: info })
            })
            .catch(console.log)
    }
    render() {
        return (
            <Recipes recipes={this.state.recipes} />
        )
    }
}


