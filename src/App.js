import React from 'react';
import Header from './components/layout/Header';
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';

import './App.css';

class App extends React.Component {
  state = {
    list: [
      {
        id: 1,
        title: 'milk',
        completed: true
      }, 
      {
        id: 2,
        title: 'eggs',
        completed: false
      }, 
      {
        id: 3,
        title: 'bananas',
        completed: false
      }, 
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

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddItem />
          <ShoppingList list={this.state.list} markComplete={this.markComplete}
          delItem={this.delItem} />
        </div>
      </div>
   )
  }  
}
export default App;
