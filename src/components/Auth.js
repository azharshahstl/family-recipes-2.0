import { auth, googleAuthProvider } from "../config/firebase.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signInWithUserAndPassword = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <input onChange={handleEmailChange} placeholder="email" />
      <input
        onChange={handlePasswordChange}
        type="password"
        placeholder="password"
      />
      <button onClick={signInWithUserAndPassword}>Sign in</button>
      <button onClick={handleSignInWithGoogle}>Sign in With Goolge</button>
    </>
  );
};

export default Auth;
