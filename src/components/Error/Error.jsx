import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
       <div>
         <h2>This page is not found</h2>

         <Link to={'/'}><button>Go to Home</button></Link>
       </div>
    </div>
  );
};

export default Error;