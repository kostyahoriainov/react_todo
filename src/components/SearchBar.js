/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SearchBar extends Component {

    onSearch = () => {
        this.props.search(this.searchValue.value)
    }

    render () {
        return (<>
            <input ref={search => {this.searchValue = search }} onKeyUp={this.onSearch} placeholder='Search'/>
            </>
        )
    }
}

export default SearchBar