import React from 'react'
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const Authentication = () => {
  return (
    <div>
      <h1>SIGN IN</h1>
      <SignInForm />
      <SignUpForm /> 
    </div>
  )
}

export default Authentication;
