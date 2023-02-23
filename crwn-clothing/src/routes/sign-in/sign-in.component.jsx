import React from 'react'
import SignUpForm from '../../components/sign-up/sign-up-form/sign-up-form.component';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {


  const logGoogleUser = async () => {
    const {user}  = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }  
  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button> 
      <SignUpForm /> 
    </div>
  )
}

export default SignIn;
