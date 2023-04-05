import React from 'react';


const LoginForm = () => {
  return (
    <form>
        <div className=''>
            <label>Phone number</label>
            <input type='tel' placeholder='Enter you number' 
            className='w-full border rounded-md bg-transparent border-gray-400 p-3' />
        </div>
        <div className=''>
            <label>Password</label>
            <input type='tepassword' placeholder='Enter your number' 
            className='w-full border rounded-md bg-transparent border-gray-400 p-3' />
        </div>
        <div className='flex justify-between mb-6'>
            <label className=' hover:font-semibold text-gray-500'>
                <input type='checkbox' className='mr-2' />
                Remember me
            </label>

            <a href='#' className='hover:text-green-300'>Forgot password?</a>
        </div>
        <button className='block bg-green-300 text-white w-full py-2 px-8 rounded hover:bg-green-400'>Login</button>
        <div className='mt-4 text-center'>
            Don't have an account yet? <span className='text-green-400 cursor-pointer'>Sign Up</span>
        </div>
    </form>
  )
}

export default LoginForm