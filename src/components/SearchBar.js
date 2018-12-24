/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class SearchBar extends Component {
    render () {
        return (<>
            <input ref={search => {this.searchValue = search }} onKeyUp={() => this.props.search(this.searchValue.value)} placeholder='Search'/>
            </>
        )
    }
}

