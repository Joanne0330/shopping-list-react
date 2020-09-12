import React from 'react';

function Header() {
  return (
      <header style={headerStyle}>
          <h1>My Shopping List</h1>
      </header>
  )
}

const headerStyle = {
  background: '#333',
  color: 'white',  
  textAlign: 'center',
  padding: '10px'  
}

export default Header;