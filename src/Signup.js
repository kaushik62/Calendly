import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth} from './Firebase';
// import { setDoc, doc } from 'firebase/firestore';
import { signInWithEmailAndPassword,signInWithPopup, googleProvider, db, doc, setDoc } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file for styling

// import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from './firebase/firestore'; // adjust path as necessary


function Signup() {
// login with Google
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    window.location.href = "/"

    // Store user data in Cloud Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      uid: user.uid,
      name: user.displayName,
      profilePic: user.photoURL,
    });

    console.log("User logged in with Google and data stored!");
  } catch (error) {
    console.error("Error logging in with Google:", error.message);
  }
};


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setfName] = useState("");


  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  };


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;


      toast.success("Registered Successfully !", {
        position :"top-center"
      });

      // Store user data in Cloud Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        firstName : fName,
      });

      console.log("User signed up and data stored!");
      window.location.href = "./login";
    } catch (error) {
      console.error("Error signing up:", error.message);
      // toast.success(error.message);

      toast.error(error.message, {
        position: "top-center",
        // className: "toast-red",
      })
    }
  };

  return (
    <>
      <div className="login_ssignup_container">
        <div className="loginImage">
          <h3>Welcome to Mentog</h3>
          <p style={{ marginTop: "15%" }}>Learning comes with a sense of duty. It's something we all feel. When someone teaches you a new skill, you may be compelled to go teach someone else.</p>
          <p>If you cannot see where you are going, ask someone who has been there before.</p>
        </div>
        <div className="form_container">
          <form>
            <h3>Register</h3>
            <span className="sign_in_up_close_btn" onClick={handleClose}><FontAwesomeIcon icon={faCircleXmark} /></span>
            <p>Name</p>
            <input type="text" placeholder="Enter First name " onChange={(e) => setfName(e.target.value)} required />
            <p>Email</p>
            <input type="email" placeholder="Enter email" name="email" id="email_1" onChange={(e) => setEmail(e.target.value)} required />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password at least in 6 digits"
              name="password"
              id="password_1" onChange={(e) => setPassword(e.target.value)} required
            />
            <p id="logged_successfully">Logged Successfully</p>
            <p id="incorrect_user">Incorrect email or password</p>
            <button onClick={handleSignUp} type="" id="login">
              Signup
            </button>
          </form>
          <p style={{ textAlign: "center", fontSize: 20 }}>or</p>
          <button onClick={handleGoogleLogin} id="google_signup">
            <img src="Image/goolge.webp" alt="" />
            <img src={require("../src/images/goolge.webp")} alt="google" />

            Signup with Google
          </button>
          <p
            style={{
              textAlign: "center",
              fontSize: 18,
              marginTop: 30,
              color: "darkblue",
              cursor: "pointer"
            }}
          >
            <span style={{fontSize : "17px"}} onClick={() => navigate('/login')}>Already have an account, Login Here</span>
          </p>
        </div>
      </div >
    </>
  )
}

export default Signup;