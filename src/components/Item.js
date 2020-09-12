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
  markComplete =(e) => {
      console.log(this.props)
  }

  render() {
    return (
      <div style={this.getStyle()}> 
        <p>
          <input type="checkbox" onChange={this.markComplete}/> {' '} 
          {this.props.item.title}
        </p>
      </div>  

    )
  }  
}

Item.propTypes = {
    item: PropTypes.object.isRequired
}
export default Item;