import React from 'react';
import PropTypes from 'prop-types';

export class Item extends React.Component {
  getStyle() {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',  
      textDecoration: this.props.item.completed ?
      'line-through' : 'none'  
    }
  }

  render() {
    const {id,title } = this.props.item;  
    return (
      <div style={this.getStyle()}> 
        <p>
          <input type="checkbox" onChange={() => this.props.markComplete(id)}/> {' '} 
          
          {title}
          <button onClick={() => this.props.delItem(id)} style={btnStyle}>x</button>
        </p>
      </div>  

    )
  }  
}

Item.propTypes = {
    item: PropTypes.object.isRequired
}

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default Item;