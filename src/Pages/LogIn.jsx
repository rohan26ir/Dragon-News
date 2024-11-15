import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none ">
        <h2 className='text-center text-lg font-bold mx-auto py-6 border-b-[1px] border-gray-400 w-[80%]'>Login your account</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>

        <p className='text-sm text-center py-3'>Dont’t Have An Account ? <Link to={'/auth/register'}><span className='text-red-600'>Register</span></Link></p>
      </form>
    </div>
    </div>
  );
};

export default LogIn;