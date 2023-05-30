import React from 'react'

const Card2 = ({histo}) => {
  return (
    <div>
        <div class="card m-4">
  <h5 class="card-header ">Facture num : {histo.idFacture} </h5>
  <div class="card-body">
    
    <div className='d-flex justify-content-xl-between'>
    <p class="card-text">Date de paiement : {histo.date}  </p>
      <div className='row'>
      <h5 class="card-header ">Prix paye : {histo.prix} TND</h5>
      
      </div>
    
    
    </div>
  </div>
</div><br/>
    </div>
  )
}

export default Card2