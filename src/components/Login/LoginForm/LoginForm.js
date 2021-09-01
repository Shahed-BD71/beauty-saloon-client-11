import React from 'react';
import './LoginForm.css';

const LoginForm = ({name, nameError, setName, email, password,setEmail, setPassword, handleLogIn, handleSignUp, passwordError, emailError, hasAccount, setHasAccount, googleSignIn}) => {
   return (
     <section className="login mt-5 mb-5">
       <div className="loginContainer">
         {!hasAccount ? (
           <div>
             <label>UserName</label>
             <input
               type="name"
               autoFocus
               required
               value={name}
               onChange={(event) => setName(event.target.value)}
             ></input>
             <p className="errorMsg">{nameError}</p>
           </div>
         ) : null}
         <label>Email</label>
         <input
           type="email"
           autoFocus
           required
           value={email}
           onChange={(event) => setEmail(event.target.value)}
         ></input>
         <p className="errorMsg">{emailError}</p>
         <label>Password</label>
         <input
           type="password"
           autoFocus
           required
           value={password}
           onChange={(event) => setPassword(event.target.value)}
         ></input>
         <p className="errorMsg">{passwordError}</p>
         <div className="btnContainer">
           {hasAccount ? (
             <div>
               <button className="btn-login" onClick={handleLogIn}>
                 Sign In
               </button>
               <p className="text-center">
                 Don't have an account ?{" "}
                 <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
               </p>
             </div>
           ) : (
             <div>
               <button className="btn-login" onClick={handleSignUp}>
                 Sign Up
               </button>
               <p className="text-center">
                 Already have an account ?{" "}
                 <span onClick={() => setHasAccount(!hasAccount)}>Login</span>
               </p>
             </div>
           )}
         </div>
         <div className="bg-light rounded mt-3 text-center">
           {" "}
           <button
             className="btn btn-lg btn-google fw-bold"
             onClick={googleSignIn}
           >
             <img
               className="me-2"
               src="https://img.icons8.com/color/16/000000/google-logo.png"
               alt=""
             />
             Continue With Google
           </button>
         </div>
       </div>
     </section>
   );
};

export default LoginForm;