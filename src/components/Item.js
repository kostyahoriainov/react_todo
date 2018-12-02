/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Item extends Component {

    renderTask() {
        const item = this.props.item

        return (
            <li>
                <input type='checkbox' onClick={this.props.handleCheck} onChange={() => { }} id={item.id}/>
                <label htmlFor={item.id}>{item.text}</label>
                <button onClick={this.props.onRemove}>remove</button>                
            </li> 
        )
    }

    renderDone() {
        const item = this.props.item
        return(
        <li>
            <input type='checkbox' onClick={this.props.handleCheck} onChange={() => { }}  id={item.id} checked='checked'/>
        </li>
        )
    }

    render() {
        const item = this.props.item
        return (
            <div>
                {item.isChecked ? this.renderDone() : this.renderTask()}
            </div>
        )
    }
}

export default Item