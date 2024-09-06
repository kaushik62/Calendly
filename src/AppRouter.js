import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './About';

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<AboutUs/>} />
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AppRouter;
