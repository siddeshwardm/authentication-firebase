import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import './App.css'
import { app } from './firebase.js'
import Signup from './pages/signup.jsx';
import Signin from './pages/signin.jsx';
import { useEffect, useState } from "react";


const auth = getAuth(app);


function App() {

    const [user,setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth,(User) => {
            if(User){
                setUser(User);
            }
            else{
                console.log("no user logged in");
                setUser(null);
            }
    });
    }, []);





    if(user===null){
    return(

        <div className="App">

            <Signup />
            <Signin/>

        </div>
        );
    }



    return(
        <div className="App">
            <h1>Welcome {user.email}</h1>
            <button onClick={() => signOut(auth)}> LogOut</button>
        </div>
    );

}

export default App
