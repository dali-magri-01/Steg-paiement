import React, { useState } from 'react'
import { BeatLoader } from "react-spinners";

const Maps = () => {
    const [isLoading, setIsLoading] = useState(true); // état local pour suivre si la carte est en cours de chargement

    const handleMapLoad = () => {
      setIsLoading(false); // mise à jour de l'état local lorsque la carte est chargée
    };
  
  return (
    <div>
         {isLoading && (
        <div className="spinner m-5">
          <BeatLoader color="#123abc" />
        </div>
      )}
          <iframe class="gmap_iframe" onLoad={handleMapLoad} style={{width:"700px",height:"700px"}} width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=tunis steg&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

    </div>
  )
}

export default Maps