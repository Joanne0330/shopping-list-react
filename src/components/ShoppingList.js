import React from 'react';

class ShoppingList extends React.Component{
  render() {
    return this.props.list.map((item) => (
      <h3>{item.title }</h3>
     ));

  }  
}
export default ShoppingList;