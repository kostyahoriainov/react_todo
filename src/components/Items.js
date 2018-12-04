/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Item from './Item'

export default class Items extends Component {

    render() {
        return (<ul className='items'>
            {this.props.items.map(item => <Item key={item.id}
                                                onRemove={() => this.props.delete(item.id)}
                                                item={item}
                                                handleCheck={() => this.props.handleCheck(item.id)}/>
                                                )}
        </ul>
        )
    }
}
