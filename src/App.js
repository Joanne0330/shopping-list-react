import React from 'react';
import ShoppingList from './components/ShoppingList';

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
  render() {
    return (
      <div className="App">
        <ShoppingList list={this.state.list} markComplete={this.markComplete} />
      </div>
   )
  }  
}
export default App;
