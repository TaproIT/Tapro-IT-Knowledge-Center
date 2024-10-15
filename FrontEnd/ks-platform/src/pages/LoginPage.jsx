import React, {useRef} from 'react'
import logo from '../assets/splash_screen/logo.png'
import {useNavigate} from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = ()=>{
        navigate('/home')
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-blue-50'>
            <div className='w-10/12 sm:w-3/12 md:w-4/12 min-w-[320px] max-w-[370px] flex flex-col items-center justify-center'>
                <div className='px-10 py-5 w-full flex flex-col items-center bg-white'>
                    <img src={logo} alt='logo' className='w-2/5'/>
                    <h3 className='mb-2 text-2xl font-semibold'>Sign In</h3>
                    <p className='sm:mb-3 text-sm text-gray-400 text-center'>Welcome back! Please enter your details</p>
                    <div className='mt-2 sm:mt-3 w-full flex flex-col gap-1 justify-center'>
                        <label className='text-sm'>Email</label>
                        <input
                            ref={emailRef}
                            type='text'
                            placeholder='Enter your email address'
                            className='px-5 py-2 w-full border-[2px] rounded-lg shadow-sm placeholder-gray-200
                            placeholder:text-gray-400 placeholder:text-sm focus:outline-primary'
                        />
                    </div>
                    <div className='mt-2 sm:mt-3 w-full flex flex-col gap-1 justify-center'>
                        <label className='text-sm'>Password</label>
                        <input
                            ref={passwordRef}
                            type='password'
                            placeholder='Enter Password'
                            className='px-5 py-2 w-full border-[2px] rounded-lg shadow-sm placeholder-gray-200
                            placeholder:text-gray-400 placeholder:text-sm focus:outline-primary'
                        />
                    </div>
                    <div className='mt-6 sm:mt-8 w-full '>
                        <button
                            onClick={handleLogin}
                            className='px-5 py-2 w-full flex items-center justify-center text-md font-semibold
                            text-white bg-primary bg-opacity-70 hover:bg-opacity-100 rounded-lg'>
                            Login
                        </button>
                    </div>
                    <div className='mt-2 w-full flex justify-end cursor-pointer'>
                        <p className='text-sm text-primary font-semibold'>Forgot password?</p>
                    </div>
                    <div className='mt-7 sm:mt-10 w-full flex gap-3 items-center justify-center'>
                        <p className='text-sm'>Do you haven't account? </p>
                        <a className='text-sm text-primary'>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
