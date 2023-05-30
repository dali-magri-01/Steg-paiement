import React from 'react'
import YouTube from 'react-youtube';
const Box1 = () => {
    const videoId = "QLrCs6xmig4"
  return (
    <div style={{backgroundColor:"#E3E7EA"}}>
        
    <div className='p-5'>
        <div className='row'>
            <div className='col mt-5 me-3'>
              <br/>
                <p className='row' >À l'occasion de son soixantième anniversaire, nous célébrons avec vous la nationalisation de la Société Tunisienne de l'Électricité et du Gaz (STEG), qui a été le pilier de l'économie depuis 1962 jusqu'en 2023. Avec l'expérience de générations successives, cette entreprise a été érigée grâce aux efforts des femmes et des hommes. La STEG a vécu en tant qu'entreprise tunisienne, publique et nationale. #steg_61_ans #Ramadan_2023🌙🌃🔭 #Société_Tunisienne_de_l'Électricité_et_du_Gaz.</p>
            </div>
            <div className='col shadow'>
            <YouTube videoId={videoId} />
            </div>
        
        </div>


    </div>
    </div>
  )
}

export default Box1