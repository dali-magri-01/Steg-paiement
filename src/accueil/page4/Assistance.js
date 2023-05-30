import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Maps from '../../components/Maps'
import CardAssistance from '../../components/CardAssistance'

const Assistance = () => {
  return (
    <div>
        <Navbar/>

        <div className=' shadow row mt-5'>
            <div className='col container shadow  '><Maps/></div>
            <div className='col'>
                <CardAssistance/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Assistance