import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.components';

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
     const { name, value} = e.target;
     setFormFields({
        ...formFields,
        [name]: value
     })
  } 
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
       alert('Passwords do not match');
       return;
    }

    try {
        const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password
        )
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
    }catch(err) {
        if(err.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
        }
        console.log('user creation encountered an error: ', err);
    }
  }


  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text" 
          onChange={handleChange} 
          value={displayName} 
          name='displayName' 
          required
        />

        <FormInput 
           label="Email"
           type="email"  
           onChange={handleChange} 
           value={email} 
           name='email' 
           required
        />
        
        <FormInput 
           label="Password"
           type="password"  
           onChange={handleChange} 
           value={password} 
           name='password' 
           required
           />
        
        <FormInput 
            label="Confirm Password"
            type="password" 
            onChange={handleChange} 
            value={confirmPassword} 
            name='confirmPassword' 
            required
        />

        <Button type='Submit'>Sign Up</Button>
      </form>  
    </div>
  )
}
export default SignUpForm;