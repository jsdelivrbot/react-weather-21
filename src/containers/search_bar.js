import React, { Component } from 'react';

export default class SearchBar extends Component {
    
    constructor (props){
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form className = "input-group" onSubmit = { this.onFormSubmit }>

                <input
                    placeholder = "Enter your city"
                    className = "form-control"
                    onChange = { this.onInputChange }
                    value = { this.state.term }
                />

                <span className = "input-group-btn">
                    <button className = "btn btn-primary">Submit</button> 
                </span>
            </form>
        )
    }
}