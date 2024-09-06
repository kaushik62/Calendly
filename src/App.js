import Navbar from './Navbar';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './About';
import ContactUs from './Contact';
import Login from './Login';
import Signup from './Signup';
import Mentors from './mentors';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChatApp from './ChatApp';


const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element :  <><Navbar /><Home/></>
        },
        {
            path: "login",
            element: <><Navbar /><Login/></>
        },
        {
            path: "signup",
            element : <><Navbar/><Signup/></>
        },
        {
            path: "about",
            element : <><Navbar/><About/></>
        },
        {
            path: "contact",
            element : <><Navbar/><ContactUs/></>
        },
        {
            path: "mentors",
            element : <><Navbar/><Mentors/></>
        },
        {
            path: "chatapp",
            element : <><Navbar/><ChatApp/></>
        },

        

    ])


    return (
        <div className="App">
            <RouterProvider router={router} />
            <ToastContainer/>
        </div>
    );
};

export default App;