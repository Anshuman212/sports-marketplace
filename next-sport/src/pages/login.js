import Layout from 'components/Layout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import React from 'react';
import signIn from 'next-auth/react'

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try{
      const result =await signIn('credentials',{
        redirect:false,
        email,
        password,
      });
    }catch(err){
      toast.error(getError(err));
    }
  };
  return (
    <Layout title={'Login'}>
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type={'email'}
            {...register('email', {
              required: 'Enter email',
              pattern: {
                value: /^a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'enter valid email',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'enter password',
              minLength: {
                value: 6,
                message: 'password more than 8 characters',
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4">
          Don&nbsp;t have an account? &nbsp;
          <Link href={'register'}>Register</Link>
        </div>
      </form>
    </Layout>
  );
}
