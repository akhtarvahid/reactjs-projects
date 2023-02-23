import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth';
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  useEffect(() => {
     async function fetchMyApi() {
        const response = await getRedirectResult(auth);
        console.log(response);
        if(response) {
            const userDocRef = await createUserDocumentFromAuth(response.user)
        }
     }
     fetchMyApi();
  }, []);

  const logGoogleUser = async () => {
    const {user}  = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }  
  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>  
      <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect</button>
    </div>
  )
}

export default SignIn;
