import React from 'react';

export class AddItem extends React.Component {
  state = {
      title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: '' });
  }

  onChange =(e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          style={{ flex: '10', padding: '5px' }}
          type="text" 
          name="title" 
          placeholder="Add Item ..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          data-testid="submit"
          className="btn"
          style={{ flex: '1' }}
        />   
      </form>
    )
    
  }
}

export default AddItem