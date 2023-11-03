import React from 'react'
import Home from '../component/Home';
import City from '../component/City';
import Bloodgrp from '../component/Bloodgrp';
import Displaytbl from '../component/Displaytbl';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";



const Rout = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/city' element={<City/>}/>
            <Route path='/bloodgrp' element={<Bloodgrp/>}/>
            <Route path='/display' element={<Displaytbl/>}/>
        </Routes>
    </Router>
    
    </>
  )
}

export default Rout
