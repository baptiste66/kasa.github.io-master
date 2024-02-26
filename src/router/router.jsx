import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Error from '../pages/404';
import About from '../pages/about';
import Logement from '../pages/logement';
import '../style/pages/home.css';

// 2 home for put on start page and to return error page when the url changes
function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/logement/:id' element={<Logement />} />
                <Route path='*' element={<Error />} />
            </Routes>

        </div>
    );
}

export default Routing; 