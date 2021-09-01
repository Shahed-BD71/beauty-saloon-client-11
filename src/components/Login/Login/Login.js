/* eslint-disable default-case */
import React, {useState, useEffect} from 'react';
import './Login.css';
import LoginForm from '../LoginForm/LoginForm';
import LogOut from './LogOut';
import Navbar from '../../Shared/Navbar/Navbar'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "./firebase.config";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useHistory, useLocation, Link } from "react-router-dom";

const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

const Login = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);


  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };



  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  
const setUserToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {
      // Handle error
    });
};


// Google Sign in...
const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      setUserToken();
      localStorage.setItem('user', JSON.stringify(signedInUser));
      return signedInUser;
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
    });
};

const googleSignIn = () => {
  handleGoogleSignIn().then((res) => {
    handleResponse(res, true);
    setLoggedInUser(res, true);
  });
};

// facebook Sign in...
const handleFbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      user.success = true;
      return user;
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
 };
 const fbSignIn = () => {
   handleFbSignIn().then((res) => {
     handleResponse(res, true);
   });
 };

// Email Password section
 const clearInputs = () => {
   setEmail("");
   setPassword("");
 }

 const clearErrors = () => {
   setEmailError("");
   setPasswordError("");
 }

 const handleLogIn = () => {
    clearErrors();
    firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .catch((error) => {
       switch (error.code) {
         case "auth/invalid-email":
         case "auth/user-disabled":
         case "auth/user-not-found":
           setEmailError(error.message);
           break;
         case "auth/wrong-password":
           setPasswordError(error.message);
           break;
         case "auth/invalid-name":
           setName(error.message)
           break;
       }
     });
  };
  
 const handleSignUp = () => {
     clearErrors();
     firebase
       .auth()
       .createUserWithEmailAndPassword(email, password)
       .catch((error) => {
         switch (error.code) {
           case "auth/email-already-in-use":
           case "auth/invalid-email":
             setEmailError(error.message);
             break;
           case "auth/weak-password":
             setPasswordError(error.message);
             break;
           case "auth/invalid-name":
             setName(error.message);
             break;
         }
       });
   };

 const handleLogOut = () => {
     firebase
      .auth()
      .signOut();
      clearInputs();
   };
 const authListener = () => {
     firebase
     .auth()
     .onAuthStateChanged((user) => {
       if (user) {
         clearInputs();
         setUser(user)
       }else{
         setUser("");
       }
     });
 };

  useEffect ( () => {
    authListener();
 }, [])

  return (
    <div>
      <Navbar name={name} handleLogOut={handleLogOut}></Navbar>
      {user ? (
        <LogOut handleLogOut={handleLogOut}></LogOut>
      ) : (
        <LoginForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSignUp={handleSignUp}
          handleLogIn={handleLogIn}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          nameError={nameError}
          emailError={emailError}
          passwordError={passwordError}
          googleSignIn={googleSignIn}
        ></LoginForm>
      )}
    </div>
  );
};

export default Login;