import React, { useState,useEffect } from 'react'
import { CContainer } from '@coreui/react'
import Logo from "../images/Logo.png";
import { Link ,useLocation,useNavigate } from "react-router-dom"; 
import axios from 'axios';


const Bloodgrp = () => {
     const[Bgrp,setBgrp]=useState([]);
     const [selectedBgrp, setSelectedBgrp] = useState('');
      
     const navigate = useNavigate(); 
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const selectedCity = searchParams.get('city');
    
     

    //  console.log(Bgrp);

    useEffect(() => {
   
        axios.get('http://localhost:5000/blood')
        .then(blood=> setBgrp(blood.data))
        .catch((err)=>console.log(err))
      
      }, []);
 
     const hndlSelect =(event)=>{
        setSelectedBgrp(event.target.value);
     }
     
     const handleNext = () => {
        if (selectedCity && selectedCity) {
            navigate(`/display?city=${selectedCity}&bloodgroup=${selectedBgrp}`);
        }
    };
  
    
  return (
    <>
       <CContainer fluid className='city-page bg'>
         <div className="row Navigation">
            <div className="col-6 py-2 d-flex justify-content-center align-items-center"><img src={Logo} alt="logo" height={300} width={300}/></div>
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
                       <span>Select Your blood group</span>
                    </div>
                   </div>
                   <div className="row py-4">
                    <div className="col-12">

                    <select className='selectcity mt-4' value={selectedBgrp} onChange={hndlSelect}>
                                <option value="">Choose One</option>
                                {Bgrp.map(Bgrp => (
                                      <option key={Bgrp.id} value={Bgrp.bldgrp}>
                                                {Bgrp.bldgrp}
                                      </option>
                                 ))}
                     </select>
                        
                    </div>
                   </div>

                   <div className="row d-flex justify-content-end align-items-center">
                            <div className="col-4 gap-2 px-3 next-btn d-flex flex-row">

                                <Link to={"/city"} className='text-decoration-none'>
                                <span className='px-3 d-flex justify-content-center align-items-center back-btn'>Back</span>
                                </Link>
                            
                                {/* <Link to={"/display"} className='text-decoration-none'> */}
                                    <span className=' px-3 d-flex justify-content-center align-items-center' onClick={handleNext}>Next</span>
                                {/* </Link>        */}
                             </div>
                   </div>
                </div>
            </div>
        </div>
    </CContainer>
    </>
  )
}

export default Bloodgrp;
