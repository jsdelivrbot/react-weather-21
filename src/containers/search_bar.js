import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    
    constructor (props){
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchWeather}, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);