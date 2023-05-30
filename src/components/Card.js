import  Modal from './Modal'
import React from 'react'

const Card = ({facture}) => {
  return (
    <div>
<div class="card m-4">
  <h5 class="card-header ">Facture num : {facture.id}</h5>
  <div class="card-body">
    <h5 class="card-title d-flex">Consomation : {facture.consomation}Kw</h5>
    <div className='d-flex justify-content-xl-between'>
    <p class="card-text">Date d'expiration {facture.dateExp} </p>
      <div className='row'>
      <h5 class="card-header ">Prix a payer : {facture.prix}</h5>
      <Modal facture={facture}/>
      </div>
      
    
    
    </div>
  </div>
</div><br/>
    </div>
  )
}

export default Card