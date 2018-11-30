import React, { Component } from 'react';
import './App.css';
import Items from './components/Items';
import {generate as id} from 'shortid';
import NewItem from './components/NewItem';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = {
    items: [
      { text: 'task1', id: id(), isChecked: false},
      { text: 'task2', id: id(), isChecked: true},
      { text: 'task3', id: id(), isChecked: false},
      { text: 'task4', id: id(), isChecked: true},
      { text: 'task5', id: id(), isChecked: false},
      { text: 'task6', id: id(), isChecked: true},
      { text: 'task7', id: id(), isChecked: false}
    ],
    searchValue: ''
  }

  add = (item) => {
    this.setState({ items: [...this.state.items, item] })
  }

  delete = id => {
    this.setState({items: this.state.items.filter((item) => item.id !== id)})
  }

  uncheckedAll = () => {
    const items = this.state.items.map((item) => {
      return {...item, isChecked: false}
    })
    this.setState({items})
  }

  handleCheck = id => {
    this.setState({ items: this.state.items.map(item => item.id === id? {...item, isChecked: !item.isChecked} : item )})
  }

  search = value => {
    this.setState({ searchValue: value })
  }


  render() {
    const data = this.state.items.filter(item => item.text.includes(this.state.searchValue));
    return (
      <div>
        <SearchBar search={this.search}/>
        <Items items={data} delete={this.delete} handleCheck
        ={this.handleCheck}/>
        <NewItem add={this.add}/>
        <button onClick={this.uncheckedAll}>uncheckedAll</button>
      </div>
    );
  }
}

export default App;
