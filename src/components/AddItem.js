import React from 'react';

export class AddItem extends React.Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input 
          style={{ flex: '10', padding: '5px' }}
          type="text" 
          name="title" 
          placeholder="Add Item ..." 
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{ flex: '1' }}
        />   
      </form>
    )
    
  }
}

export default AddItem