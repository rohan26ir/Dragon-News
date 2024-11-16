import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { usericon } from '../assets/user.png' ;
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  
  return (
    <div className='w-11/12 mx-auto  my-2'>
      
      <div className='flex justify-between items-center'>
        
        <div> <p>{user && user.email}</p> </div>
          <div className='space-x-4'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/career'}>Career</Link>
          </div>
        <div className=''>
          

         <div className='flex space-x-3'>
         <img 
          src={userIcon} 
          alt="" />


          {
            user &&  user.email ?
          
          <button onClick={logOut} className='px-5 py-1 bg-gray-500'>Log Out</button>
            
          : <Link to={'/auth/login'}><button className='px-5 py-1 bg-gray-500'>Log  in</button></Link>
          }

          
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;