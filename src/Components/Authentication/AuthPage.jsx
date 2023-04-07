import React, { useState } from 'react';
import Image from "next/image";
import { getAuth } from "firebase/auth";
// import '@/styles/Home.module.css';

// import './style.css';

const AuthPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    showPassword: false,
    submitting: false,
    forgotPassword: false,
    confirmPassword: '',
    isNewUser: false
  });

  const [user, error,] = useSignInWithGoogle();

  const handleSubmit = (e) => {
    e.preventDefault();

  };


  const onChange = (event) => {
    //update form state
    setForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  //google sign in fxn
  const signInWithGoogle = async () => {
    const auth = getAuth();
    await signInWithRedirect(auth, googleProvider);
    // toast({
    //   title: "signed in",
    //   description: "",
    //   status: "success",
    //   duration: 3000,
    //   isClosable: true
    // })
  };

  const sendResetPassword = () => {

  };

  const Heading = () => {
    const date = new Date();
    if (date.getHours() < 12) {
      return "Good Morning";
    } else if (date.getHours() > 12 && date.getHours() < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };


  return (
    <section className='auth-section-container'>
      <div className='auth-container'>
        <div className='auth-image-container'>
          {/* <Image className='auth-image' src='https://unsplash.com/photos/pTrhfmj2jDA' width='1' height='1' alt='' /> */}
        </div>


        <section className='auth-section'>
          <h1>{Heading()}</h1>
          <h5>{!form.isNewUser ? 'Welcome Back! Enter your details to sign in.' : ' Welcome! Enter your details to sign up.'}</h5>



          <form className='form' onSubmit={handleSubmit}>


            {/* if its a new user and he doesnt forget his password this shows up */}


            {(!form.forgotPassword) &&
              <>
                <label for='email'>Email</label>
                <input
                  className='auth-input'
                  type='email'
                  name='email'
                  value={form.email}
                  placeholder='Email'
                  onChange={onChange}
                />

                <label for='password'>Password</label>
                <input
                  className='auth-input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={form.password}
                  onChange={onChange}
                />



                {/* confirm password only shows if the person is creating an account, it is hidden when signing in  */}


                {form.isNewUser &&
                  <>
                    <label for='confirm password'>Confirm Password</label>
                    <input
                      className='auth-input'
                      type='password'
                      name='confirmPassword'
                      placeholder='Password'
                      value={form.confirmPassword}
                      onChange={onChange}
                    />
                  </>}


                {/* forgot password option only shows if the person is signing in  */}


                {!form.isNewUser && <div className='forgot-password' onClick={() => setForm((prev) => ({
                  ...prev,
                  forgotPassword: !prev.forgotPassword
                }))}>Forgot Password?</div>
                }

                <div className='auth-group -buttons'>
                  <input
                    className='auth-button'
                    type='submit'
                    value={form.isNewUser ? 'Sign Up' : 'Log In'}
                  />
                  <p className='or'>OR</p>
                  <button
                    className='google-button'
                    onClick={signInWithGoogle}>Continue with Google</button>
                </div>
              </>
            }

            {/* this is the reset password section it will on display if the user forgets his password and if it is not a new user */}


            {(form.forgotPassword && !form.isNewUser) &&
              <>
                <label for='email'>Email</label>
                <input
                  className='auth-input'
                  type='email'
                  name='email'
                  value={form.email}
                  placeholder='Email'
                  onChange={onChange}
                />
                <div className='forgot-password' onClick={() => setForm((prev) => ({
                  ...prev,
                  forgotPassword: !prev.forgotPassword
                }))}>Log In</div>
                <button className='reset-password' onClick={sendResetPassword}>Reset Password</button>
              </>}
          </form>


          {/* conditional option displays only when SignIn/SignUp */}


          {(!form.forgotPassword) &&
            <div className='no-account'>{form.isNewUser ? ' have an account?' : 'no account?'}
              <span className='no-account-button' onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  isNewUser: !prev.isNewUser,
                }))}>
                {form.isNewUser ? 'Log In' : 'Sign Up'}
              </span>
            </div>
          }
        </section>
      </div>
    </section >
  );
};

export default AuthPage;