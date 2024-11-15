import React from 'react';
import { Link } from 'react-router-dom';
// import { usericon } from '../assets/user.png' ;
import userIcon from '../assets/user.png'

const Navbar = () => {
  return (
    <div className='w-11/12 mx-auto  my-2'>
      
      <div className='flex justify-between'>
        
        <div> </div>
          <div className='space-x-2'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/career'}>Career</Link>
          </div>
        <div className=''>
          

         <div className='flex space-x-3'>
         <img 
          src={userIcon} 
          alt="" />

          <button className='px-5 py-1 bg-gray-500'>Log  in</button>
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;