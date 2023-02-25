import { useState } from 'react'
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.components';
import './sign-in-form.styles.scss';


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  
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

  const signInWithGoogle = async () => {
    const {user}  = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response);
        resetFormFields();
    }catch(err) {
         if(err.code === 'auth/wrong-password') {
          alert('incorrect password for email')
         }
         console.log(err);
    }
  }


  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='Submit'>Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>  
    </div>
  )
}
export default SignInForm;