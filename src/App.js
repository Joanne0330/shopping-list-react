import React from 'react';
import Header from './components/layout/Header';
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends React.Component {
  state = {
    list: [
      // {
      //   id: uuidv4(),
      //   title: 'milk',
      //   completed: false
      // }
    ]
  }

  markComplete = (id) => {
    this.setState({ list: this.state.list.map(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
      return item;
    }) }); 
  }

  delItem = (id) => {
    this.setState({ list: [...this.state.list.filter(item => item.id !== id)] });
  }

  addItem = (title) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ list: [...this.state.list, newItem] });  
  } 

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddItem addItem={this.addItem} />
          <ShoppingList list={this.state.list} markComplete={this.markComplete}
          delItem={this.delItem} />
        </div>
      </div>
   )
  }  
}
export default App;
