import React from 'react';
import ShoppingList from './components/ShoppingList';

import './App.css';

class App extends React.Component {
  state = {
    list: [
      {
        id: 1,
        title: 'milk',
        completed: false
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
  render() {
    return (
      <div className="App">
        <ShoppingList list={this.state.list} />
      </div>
   )
  }  
}
export default App;
