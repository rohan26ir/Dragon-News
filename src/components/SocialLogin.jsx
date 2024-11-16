import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const SocialLogin = () => {


  return (
    <div>
       <h2 className='font-bold mb-3'>Login with</h2>


       <div className='*:w-full'>
           <button className='btn mb-2'> <FaGoogle></FaGoogle> Login with Google </button>
           <button className='btn'> <FaGithub></FaGithub> Login with GitHub </button>
       </div>
    </div>
  );
};

export default SocialLogin;