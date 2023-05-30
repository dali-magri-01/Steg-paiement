import React, { useState } from 'react';
import './Modal.css';



const Modal = ({facture}) => {
  // const [nomClub,setnomClub]=useState('');


  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);  
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

const [numcart,setnumcart]=useState();
const [cv2,setcv]=useState()
  
function supp(id){
  fetch(`http://localhost:8080/facture/delete/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        console.log("User deleted successfully");
        window.location.reload();
        
      } else {
        console.log("Failed to delete user");
        // Handle errors here
      }
    })
    .catch(error => {
      console.log("Error deleting user: ", error);
      // Handle errors here
    });
}
  const user = JSON.parse(localStorage.getItem("userSession"));
  
  const HandleSubmit =(e)=>{
    e.preventDefault();
    const date = new Date().toISOString();
    const cin=user.cinS;
    const prix=facture.prix;
    const idFacture=facture.id;
    const k={cin,date,prix,idFacture}
   console.log(k);
     fetch("http://localhost:8080/historique/add",{
       method:"POST",
       headers:{"Content-type":"application/json"},
        body:JSON.stringify(k)
     }).then(
       ()=>{
         setIsOpen(false);
         supp(facture.id)
         //window.location.reload()
      }
     )
   
}


  return (
    <div>
      <button className='btn1' onClick={handleOpenModal}style={{marginTop:"20px",marginLeft:"20px"}}>Paiement</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modalz">
            <button className="modal-close " onClick={handleCloseModal}>X</button>
            <h3 className='row ms-2'>Numero de facture : {facture.id}</h3>
            <h3 className='row ms-2'>Information de paiement</h3>
            
            <br/> 
           <form onSubmit={HandleSubmit}>
            <div class="input-group mb-3">
                <span class="input-group-text">Person</span>
                <input type="text" class="form-control" placeholder="Nom  "/>
                <input type="text" class="form-control" placeholder="Prenom"/>
            </div>      
            <div class="input-group mb-3">
                <span class="input-group-text">Coordonnées carte</span>
                <input type="number" class="form-control" placeholder="Numero de la carte" required/>
                <input type="text" class="form-control" placeholder="CVV2/CVC2"required/>
            </div> 
            <label className='row ms-2'>Nom du detenteur :</label>
            <input type="text" class="form-control" placeholder="Nom du detenteur" required/>   
            <label className='row ms-2'>Adresse email :</label>
            <input type="email" class="form-control" placeholder="email" required/> 
            <label className='row ms-2'>CIN :</label>
            <input type="number" class="form-control" placeholder="CIN" required/> 
            <br/><br/> <br/><br/>   
            <button class="btn btn-danger text-center " type="submit" >Paiement {facture.prix} TND   </button>    
            </form>


            
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;