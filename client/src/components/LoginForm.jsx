
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post('http://localhost:8000/api/v1/auth/login', {
          email,
          password,
        });
    
        if (response && response.data) {
          console.log(response.data); // Handle successful login
          const token = response.data.data.accessToken;

          localStorage.setItem('token', token);
          setEmail('');
          setPassword('');
          setError('');
          navigate('/dashboard');
        } else {
          throw new Error('Invalid response');
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log(error.response.data); // Server error response data
          console.log(error.response.status); // Server error status code
          setError(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request); // Request object
          setError('No response received from the server');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message); // Error message
          setError('An error occurred during login');
        }
      }
    };
    
  

  return (
    <>
                <div className="flex items-center justify-center h-screen ">
    <div className="w-full max-w-md">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <p class="mt-2 text-sm text-red-600 dark:text-red-500"> {error && <div className="error">{error}</div>}</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div> */}
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{' '}
                    <a href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">
                      Create account
                    </a>
                  </div>
                </form>
             </div>
             </div>
             </div>
           </>
    

    
  );
}

export default LoginForm;
