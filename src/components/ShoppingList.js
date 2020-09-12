import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class ShoppingList extends React.Component{
  render() {
    return this.props.list.map((item) => (
      <Item key={item.id} item={item} />
     ));
  }  
}

ShoppingList.propTypes = {
    list: PropTypes.array.isRequired
}

export default ShoppingList;