import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './Firebase';
import { signInWithEmailAndPassword,signInWithPopup, googleProvider, db, doc, setDoc } from './Firebase';
import { toast, ToastContainer } from 'react-toastify';
// import Profile from './Profile';


function Login() {

  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  };

  // login with Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // toast("Logged in by Google !");
      window.location.href = "/"
      
      // Store user data in Cloud Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        uid: user.uid,
        name: user.displayName,
        profilePic: user.photoURL,
      }
      );
      
      console.log("User logged in with Google and data stored!");
      window.location.href = "/home";
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast("Logged in Successfully !", {
        position :"top-center"
      })
      window.location.href ="/"
    } catch (error) {
      console.error("Error logging in:", error.message);
      toast(error.message, {
        position:"top-center"
      })
      
    }
  };


  return (
    <>
      <div className="login_ssignup_container">
        <div className="loginImage">
          <h3>Welcome to Mentog</h3>
          <p style={{ marginTop: "15%" }}>Learning comes with a sense of duty. It's something we all feel. When someone teaches you a new skill, you may be compelled to go teach someone else.</p>
        </div>

        <div className="form_container">
          <h3>Login</h3>
          <span className="sign_in_up_close_btn" onClick={handleClose}><FontAwesomeIcon icon={faCircleXmark} /></span>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email" id="email_1" />
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            name="password"
            id="password_1"
          />

          <button onClick={handleLogin} type="" id="login">
            Login
          </button>
          <p style={{ textAlign: "center", fontSize: 20 }}>or</p>
          <button onClick={handleGoogleLogin} id="google_signup">
            <img src="Image/goolge.webp" alt="" />
            <img src={require("../src/images/goolge.webp")} alt="google" />

            Login with Google
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
            <span style={{ fontSize: "17px" }} onClick={() => navigate('/signup')}>Create a new Account</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login;