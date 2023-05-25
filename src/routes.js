import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}/>
                <Route path='/filme/:id' element={<Filme></Filme>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;