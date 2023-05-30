import React from 'react'

const PainmentTlf = () => {
  return ( 
    <div  style={{backgroundColor:"#"}}>
    <div className='p-5'>
        <div className='row'>
            <div className='col'>
                <img className='me-5 shadow' src={require('../img/sq.png')}/>
                <br/><br/>
                <p className='ms-5' style={{fontFamily:" cursive"}}>Paiement par Téléphone Portable (USSD)</p>
                <a href="https://www.steg.com.tn/fr/clients_res/paiement_telephone_oo_tt.html?tknfv=c273b4c8d-7864-4319-836f-19d2020ez9p7zz7">
                <button type="button" class="btn btn-success">Voir plus</button>          
            </a>
            </div>
            <div className='col'>
            <img style={{width:"60%",height:"340px"}} className='me-5 shadow' src={require('../img/2147279-jeune-homme-et-femme-avec-casque-microphone-et-ordinateur-service-client-support-ou-call-center-concept-gratuit-vectoriel.jpg')}/>
                <br/><br/>
                <p className='ms-5' style={{fontFamily:" cursive"}}>Demande de service</p>
                <a href="https://www.steg.com.tn/fr/demande/demande.php?tknfv=?53749ed7-d987-46bb-819b-a441b3a3pppp11p">
                <button type="button" class="btn btn-success">Voir plus</button>     
                </a>
            </div>
        </div>

    </div></div>
  )
}

export default PainmentTlf