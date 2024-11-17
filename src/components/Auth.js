import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const Auth = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const signIn = async () =>  {
        await createUserWithEmailAndPassword();
    }


    return (
        <>
        <input onChange={ handleEmailChange } placeholder="email" />
        <input onChange={ handlePasswordChange } placeholder="password" />
        <button onClick = { signIn }>Sign in</button>       
        </>
    )
}

export default Auth;