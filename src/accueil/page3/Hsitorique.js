import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios';
import Card2 from '../../components/Card2';

const Hsitorique = () => {
    const [dataS,setdata]=useState([]);
    const user = JSON.parse(localStorage.getItem("userSession"));


    const fetchData = () => {
        axios.get(`http://localhost:8080/historique/${user.cinS}`)
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
        { dataS?.length>0?(
            <div className='container shadow m-5'>
                <h5>Historique des paiements</h5>
            {dataS.map((histo)=>(<Card2 histo={histo}/>))}
            

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

export default Hsitorique