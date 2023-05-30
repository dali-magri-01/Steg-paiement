import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Jumbotron from '../../components/Jumbotron'
import Box1 from '../../components/Box1'
import PainmentTlf from '../../components/PainmentTlf'
import Slider from '../../components/Slider'
import { useNavigate } from 'react-router-dom'

const Dashbord = () => {
  const navigate=useNavigate();
  const user = JSON.parse(localStorage.getItem("userSession"));
  



  return (
    <div>
        <Navbar/>
        
        <Jumbotron user={user}/>
        <Slider/>
        <br/><br/>
        
        
        <Box1/>
        <PainmentTlf/>
        <Footer/>
    </div>
  )
}

export default Dashbord