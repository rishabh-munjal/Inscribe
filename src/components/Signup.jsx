import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as lg } from '../features/authSlice';
import Button from './Button.jsx';
import Input from './Input.jsx';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

export const  Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError('');
    try {
      const createdUser = await authService.createAccount(data); // Fixed variable overwrite
      if (createdUser) {
        const currentUser = await authService.getCurrentUser(); // Renamed to avoid conflict
        if (currentUser) dispatch(lg(currentUser));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className=" flex justify-center">
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Register Account</h2><br />

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Name: "
              placeholder="Enter your full name"
              {...register('name', { required: 'Full Name is required' })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be valid',
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
              })}
            />
                    <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default Signup;
