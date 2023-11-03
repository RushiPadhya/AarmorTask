import React from 'react';
import { CContainer } from '@coreui/react';
import Logo from "../images/Logo.png";
import Aerrow from "../images/aerrow.png"
import { Link } from "react-router-dom";





const Home = () => {
  return (
    <>
      <CContainer fluid className='home-page bg'>

        <div className="home-content py-5">
            <div className="row home-title mt-5">
                <div className="col-12 text-center mb-2"><h4>શ્રી શંખેશ્વરા પાશ્વનાથાય નમઃ</h4></div>
                <div className="col-12 text-center"><h4>શ્રી રાજેન્દ્રસૂરી ગુરુભ્યો નમઃ</h4></div>
            </div>

             <div className="home-logo">
                    <div className="row mt-5">
                            <div className="col-12 text-center">
                                <img src={Logo} alt="logo" height={300} width={300}/>
                            </div>
                    </div>
             </div>

             <div className="home-slogan">
                       <div className="row mt-5">
                             <div className="col-12 text-center">
                                  <span>Donate blood, Save life!</span>
                             </div>
                        </div>
             </div>

             <div className="home-btns">
                      <div className="row mt-5 d-flex justify-content-center align-items-center flex-column">

                            <Link to={"/city"} className='d-flex justify-content-center align-items-center flex-column text-decoration-none'>
                                  <div className="col-6 py-2 px-3 mb-3 doner-btn d-flex flex-row">
                                      <h5 className='mt-2'>Find A Doner</h5>
                                      <span className=' ms-auto px-3 d-flex justify-content-center align-items-center'><img width={30} height={30} src={Aerrow} alt="right"/></span>
                                  </div>
                            </Link>

                         
                          <div className="col-6 py-2  px-3 doner-btn d-flex flex-row">
                               <h5 className='mt-2'>Blood Doner Form</h5>
                               <span className=' ms-auto px-3 d-flex justify-content-center align-items-center'><img width={30} height={30} src={Aerrow} alt="right"/></span>
                          </div>
                      </div>
             </div>
        </div>

       
       
       
      </CContainer>
    </>
  )
}

export default Home
