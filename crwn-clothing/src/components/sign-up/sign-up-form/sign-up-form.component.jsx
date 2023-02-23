import React from 'react'

const SignUpForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display name</label> 
        <input type="text" required/>
        
        <label>Email</label> 
        <input type="email" required/>
        
        <label>Password</label> 
        <input type="password" required/>
        
        <label>Confirm Password</label> 
        <input type="password" required/>

        <button type='Submit'>Sign Up</button>
      </form>  
    </div>
  )
}
export default SignUpForm;