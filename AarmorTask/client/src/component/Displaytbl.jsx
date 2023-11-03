import React, { useState,useEffect } from 'react'
import { CContainer } from '@coreui/react'
import Logo from "../images/Logo.png";
import { useLocation } from "react-router-dom"; 
import axios from 'axios';





const Displaytbl = () => {

    

    const[tbldata,setTbldata]=useState([]);
    // console.log(tbldata);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedCity = searchParams.get('city');
    const selectedBgrp = searchParams.get('bloodgroup');
  
    

     useEffect(() => {
   
      axios.get('http://localhost:5000/user')
      .then(user=> {
        setTbldata(user.data);
        console.log(user.data);
      })
      .catch((err)=>console.log(err))
    
    }, []);
    
  
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

        <div className="display-content">
             <div className="row d-flex justify-content-center align-items-center mt-5">
              <div className="col-7">
                <h3>Information</h3>
                <h5>Selected City : {selectedCity}</h5>
                <h5>Selected Blood Group : {selectedBgrp}</h5>
              </div>
             </div>

             <div className="row d-flex justify-content-center align-items-center mt-4">
              <div className="col-7 ">
                
              <table className="table" >
                                <thead>
                                  <tr>
                                    <th scope="col">Sr.No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Mobile</th> 
                                    <th scope="col">DOB</th>
                                    <th scope="col">Address</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  
                                  {
                                    tbldata.map((res)=>{

                                      return(
                                        <tr>
                                            <td>{res.id}</td>
                                            <td>{res.name}</td>
                                            <td>{res.mobile}</td>
                                            <td>{res.dob}</td>
                                            <td>{res.addrs}</td>
                                       </tr>
                                      )
                                    })
                                  }       
                                </tbody>
                </table>
              </div>
             </div>
        </div>
    </CContainer>
    </>
  )
}

export default Displaytbl
