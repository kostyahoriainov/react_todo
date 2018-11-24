/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { generate as id } from 'shortid';

class NewItem extends Component {

    state = {
        value: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add({ text: this.state.value, id: id(), isChecked: false })
        this.setState({ value: '' });
    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange} />
                <input type='submit' />
            </form>
        )
    }
}

export default NewItem