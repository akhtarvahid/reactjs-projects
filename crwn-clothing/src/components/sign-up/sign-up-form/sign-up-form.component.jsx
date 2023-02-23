import { useEffect, useState } from 'react'

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

  console.log(formFields)

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
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