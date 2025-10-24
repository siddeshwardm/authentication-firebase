import React, {useState}from 'react';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const signin = () => {
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const signInUser = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((value) => alert("Signed In Successfully"))
        .catch((error) => alert(error));

    };    

  return (
    <div>
    <label>Email</label>
    <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" />
    <br />
    <br />
    <label>Password</label>
    <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" />
    <br />
    <br />
    <button onClick={signInUser}>Sign me in</button>
    </div>
  )
}

export default signin
