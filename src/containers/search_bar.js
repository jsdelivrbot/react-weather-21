import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

import { Input, Form, Icon, Button } from 'antd';
const FormItem = Form.Item;

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

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.fetchWeather(this.state.term);
            }
        });
        
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <Form layout="inline" onSubmit = { this.onFormSubmit }>

                <FormItem>
                    {getFieldDecorator('cityName', {
                        rules: [{ required: true, message: 'Please enter your city name!' }],
                    })(
                        <Input 
                            onChange = { this.onInputChange } 
                            prefix={<Icon type="search" 
                            style={{ fontSize: 13, width: '100%' }} />} 
                            placeholder="Enter your city name" />
                    )}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchWeather}, dispatch );
}

const WrappedSearchBar = Form.create()(SearchBar);
export default connect(null, mapDispatchToProps)(WrappedSearchBar);