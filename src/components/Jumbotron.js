import React from 'react'
import { useNavigate } from 'react-router-dom'

const Jumbotron = ({user}) => {
  const navigate=useNavigate();


  return (
    <div class=" container" style={{marginTop:"100px"}}>
    <div class="row ">
      <div class="col  ">
      
          <h1 className='row mt-4'>Bienvenue {user.prenomS} </h1><br/><br/>
          <p className='row' style={{fontFamily:" cursive",fontSize:"96%"}}>La Société tunisienne de l'électricité et du gaz (arabe : الشركة التونسية للكهرباء و الغاز) ou STEG est une société tunisienne de droit public à caractère non administratif. Créée en 1962, elle a pour mission la production et la distribution de l'électricité et du gaz naturel sur le territoire tunisien. La STEG est la deuxième plus grande entreprise tunisienne par son chiffre d'affaires en 2012
  </p>
          <br/>
          <a href='https://www.steg.com.tn'>
          <button type="button" class="btn btn-primary" >Voir plus</button></a>
      </div>
      <div class="col">
      <img  src={require('../img/téléchargé.jpg')} alt='logo' style={{height:"70%"}}/>
  
      </div>
    
      </div></div>
  )
}

export default Jumbotron