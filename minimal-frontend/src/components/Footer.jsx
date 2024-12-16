import React from 'react';

function Footer() {
  return (
    <div 
      className="d-flex flex-column p-4 justify-content-center align-items-center fs-5" 
      style={{ backgroundColor: '#4d3333' }}
    >
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>MinimalChat</p>
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>© 2024 MinimalChat. All rights reserved.</p>
    </div>
  );
}

export default Footer;
