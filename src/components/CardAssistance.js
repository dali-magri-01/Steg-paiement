import React from 'react'

const CardAssistance = () => {
  return (
    <div>
        <h4 className='mt-2'>Contact</h4>
        <img className='me-5' src={require('../img/personal-assistance-icon-security-concept-260nw-624292751-removebg-preview.png')} alt='logo' style={{marginTop:"-50px",marginLeft:"-35px"}} /><br/>
        <div class="alert alert-info ms-5 me-5">
        <strong>Numero vert!</strong>  80 100 444
        </div>
        <div class="alert alert-primary ms-5 me-5">
        <strong>Service!</strong> 71 239 222
        </div>Pour plus des detailles :
        <a href='https://www.steg.com.tn'> 
        <button type="button" class="btn btn-warning">Site web steg</button>
        </a>
        </div>
  )
}

export default CardAssistance