import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import axios from 'axios';

const PaimmentFacture = () => {
  const[dataS,setdata]=useState([]);
  const user = JSON.parse(localStorage.getItem("userSession"));
  
  
  
  const fetchData = () => {
    axios.get(`http://localhost:8080/facture/${user.cinS}`)
      .then(response => {
        // Traitez la réponse de l'API ici
        // console.log(response.data);
        setdata(response.data);
        console.log (dataS);
      })
      .catch(error => {
        // Gérez les erreurs ici
        console.error(error);
      });
  }


  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <div>
        <Navbar/>
        <img style={{width:"1438px",marginLeft:"-200px", height:"350px"}} src={require('../../img/ebp-banniere-blog-article-paiement-en-ligne-1200x630-296727294.jpg')} alt='logo'/>
        <div className='container'>
        
        </div>
        { dataS?.length>0?(
            <div className='container shadow mb-5'>
            {dataS.map((facture)=>(<Card facture={facture}/>))}
            

        </div>

        ) :(
            <div className='container mt-5 mb-5 shadow'>
            <h1> Aucun Facture</h1>
            

        </div>

        )}
        
        <Footer/>
    </div>
  )
}

export default PaimmentFacture