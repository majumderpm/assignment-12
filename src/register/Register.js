import React from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/images/google.png';

const Register = () => {
    return (
        <>
            <section className="h-screen flex justify-center align-middle">
  <div className="container px-6 py-12 h-full">
    <div className="lg:w-6/12 md:w-full sm-w-full" style={{margin:"auto"}}>
      <form>
        <div className="mb-6">
          <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Full Name" />
        </div>
        <div className="mb-6">
          <input type="number" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Number" />
        </div>
        <div className="mb-6">
          <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
        </div>
        <div className="mb-6">
          <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck3" checked />
            <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
          </div>
          <Link to="#!" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</Link>
        </div>
        <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light"> Sign in </button>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>
        <div className='my-9 text-center'>
          <p className="text-sm font-semibold "> Do you have an account?
            <Link to="/login" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Login</Link>
          </p>
        </div>
        <Link className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-4" style={{backgroundColor: "#55acee"}} to="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img src={google} alt="" className='mr-3'/>Continue with Twitter </Link>
        <Link className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3" style={{backgroundColor: "#3b5998"}} to="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-3.5 h-3.5 mr-2">
          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>Continue with Facebook </Link>
      
      </form>
    </div> 
     </div>
</section>
        </>
    );
};

export default Register;