import { getAuth } from "firebase/auth";
import './App.css'
import { app } from './firebase.js'
import Signup from './pages/signup.jsx';
import Signin from './pages/signin.jsx';


const auth = getAuth(app);


function App() {

    return(

        <div className="App">

            <Signup />
            <Signin/>

        </div>




        
    );

}

export default App
