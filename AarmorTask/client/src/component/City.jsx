import React, { useState,useEffect } from 'react'
import { CContainer } from '@coreui/react'
import Logo from "../images/Logo.png";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';




const City = () => {
                         
    const [city, setCity] = useState([]);
     const [selectedCity, setSelectedCity] = useState('');
     const navigate = useNavigate(); 
   

    //  console.log(city);

    useEffect(() => {
   
        axios.get('http://localhost:5000/city')
        .then(city=> setCity(city.data))
        .catch((err)=>console.log(err))
      
      }, []);
    

     const hndlSelect = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleNext = () => {
        if (selectedCity) {
            navigate(`/bloodgrp?city=${selectedCity}`);
        }
    };
    
     
  return (
    <>
    <CContainer fluid className='city-page bg'>
         <div className="row Navigation">
            <div className="col-6 py-2 d-flex justify-content-center align-items-center"><img src={Logo} alt="logo" height={300} width={300}/></div>
            {/* <div className="col-4 py-2 "></div> */}
            <div className="col-6 py-2 d-flex justify-content-center align-items-center navbar">
                <ul className='d-flex justify-content-center align-items-center gap-4'>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                </ul>
            </div>
         </div>

        <div className="city-content">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-4 dropdown-content">
                   <div className="row mt-5 pt-5">
                    <div className="col-12">
                       <span>Select Your City</span>
                    </div>
                   </div>
                   <div className="row py-4">
                    <div className="col-12">

                    <select className='selectcity mt-4' value={selectedCity} onChange={hndlSelect}>
                                <option value="">Choose One</option>
                                {city.map(city => (
                                      <option key={city.id} value={city.cname}>
                                                {city.cname}
                                      </option>
                                 ))}
                     </select>
                        
                    </div>
                   </div>

                   <div className="row d-flex justify-content-end align-items-center">
                            <div className="col-2 px-3 next-btn d-flex flex-row">
                               
                                    <span className=' ms-auto px-3 d-flex justify-content-center align-items-center' onClick={handleNext}>Next</span>
                        
                             </div>
                   </div>
                </div>
            </div>
        </div>
           
             

             
    </CContainer>
    </>
  )
}

export default City