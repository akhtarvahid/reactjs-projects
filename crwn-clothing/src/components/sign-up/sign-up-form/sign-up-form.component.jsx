import { useEffect, useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label> 
        <input type="text" onChange={handleChange} value={displayName} name='displayName' required/>
        
        <label>Email</label> 
        <input type="email"  onChange={handleChange} value={email} name='email' required/>
        
        <label>Password</label> 
        <input type="password"  onChange={handleChange} value={password} name='password' required/>
        
        <label>Confirm Password</label> 
        <input type="password" onChange={handleChange} value={confirmPassword} name='confirmPassword' required/>

        <button type='Submit'>Sign Up</button>
      </form>  
    </div>
  )
}
export default SignUpForm;