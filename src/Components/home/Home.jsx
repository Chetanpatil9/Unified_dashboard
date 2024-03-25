import React from 'react'
import { FaRegBookmark } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { FaUserGraduate } from "react-icons/fa6";
import { BiSolidDropletHalf } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";


const Home = () => {
  return (
    <div id='home-page'>
         <div id='home-page-container'>

         <div className='head'>
            <div className="container flexSB">
                <div className="logo">
                    <h1>Dashboard</h1>
                    <br/>
                    <span>Best Matches for you</span>
                </div>
               
                <div className='media'>
                     <i class="fa-regular fa-sliders-up"></i>  
                </div>    
                <div className="social">
                    <i className='fas fa-search icon'></i>
                </div>
            
            </div>
        </div>

        
        {/* <hr/> */}
        
        <div id='home-page-fresh-from-our-community'>
                    
                        <div id='home-page-fresh-from-our-community-cards-container'>
                        
                            <div className='home-page-fresh-from-our-community-cards1'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <h2>UX Designer</h2>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>Seatle, US <br></br>(Remote)</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>1 day ago</p>
                                    {/* <p>REPLY</p> */}
                                </div>
                            </div>

                            <div className='home-page-fresh-from-our-community-cards2'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <h2>UX Designer</h2>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>Seatle,US<br />(Remote)</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>1 day ago</p>
                                </div>
                            </div>

                            <div className='home-page-fresh-from-our-community-cards3'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <h2>UX Designer</h2>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>Seatle,US<br />(Remote)</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>1 day ago</p>
                                    {/* <p>REPLY</p> */}
                                </div>
                            </div>

                            <div className='home-page-fresh-from-our-community-cards4'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <h2>UX Designer</h2>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>Seatle, US <br></br>(Remote)</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>1 day ago</p>
                                    {/* <p>REPLY</p> */}
                                </div>
                            </div>

                            <div className='home-page-fresh-from-our-community-cards5'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <h2>UX Designer</h2>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>Seatle, US <br></br>(Remote)</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>1 day ago</p>
                                    {/* <p>REPLY</p> */}
                                </div>
                            </div>

                            <div className='home-page-fresh-from-our-community-cards6'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <h2>UX Designer</h2>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>Seatle, US <br></br>(Remote)</p>
                                <p>1 day ago</p>
                            </div>

                            
                        </div>
                    </div> 
        <hr/>
 
        <div id='home-page-fan-favourites'>
                            <h2>Recommended Jobs</h2>
                            <div id='home-page-fan-favourites-container'>
                                <div>
                                  
                                <h3><p className='two'>Prod.Designer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 30k/month</h4><br/>12 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>   
                                </div>

                                <div>
                                    
                                <h3><p className='two'>IOS-Developer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 40k/month</h4><br/>12 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>

                                <div>
                                    
                                <h3><p className='two'>UX.Designer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 30k/month</h4><br/>12 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                
                                <div>
                                    
                                <h3><p className='two'>SAP.Engineer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 40k/month</h4><br/>12 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                   
                                <h3><p className='two'>Full.stack.dev <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 50k/month</h4><br/>12 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                  
                                <h3><p className='two'>Java.devloper <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 35k/month</h4><br/>12 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>Data_Anyalisis                                            <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 40k/month</h4><br/>13 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>SAP.Engineer                                             <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 35k/month</h4><br/>13 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>UX.Designer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 30k/month</h4><br/>13 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>Prod.Designer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 40k/month</h4><br/>14 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>Full-stack-dev <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 50k/month</h4><br/>14 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>Java.devloper <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 40k/month</h4><br/>14 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                   
                                <h3><p className='two'>Full-stack-dev <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 50k/month</h4><br/>15 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>Java.Developer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 40k/month</h4><br/>15 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>SAP.Engineer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 30k/month</h4><br/>15 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>Prod.Designer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 30k/month</h4><br/>18 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>

                                <h3><p className='two'>Java.Developer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 35k/month</h4><br/>18 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>
                                <div>
                                    
                                <h3><p className='two'>SAPEngineer <FaRegBookmark /></p></h3><br/><h4><GiMoneyStack /> 40k/month</h4><br/>18 hours ago
                                <hr/>
                                <h4><p class="one"><SlLocationPin />Pune  <FaUserGraduate />Fresher  <BiSolidDropletHalf />Fulltime</p></h4>
                                </div>

                            </div>
                        </div>

    
        </div> 
    </div>


    
    
  )
}

export default Home