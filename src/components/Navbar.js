import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
    const handledeconnexion=(e)=>
    {
      navigate("/");
      localStorage.removeItem('userSession');
    }

 
  return (
    <div>
         <nav class="navbar navbar-expand-sm  "  style={{backgroundColor:"black"}}>
         
  <div class="container-fluid">
    <a href class="navbar-brand">
      {/* <img src={require('./logoEnicarEvent.png')} alt="Avatar Logo" style={{width:"150px",marginRight:"50px",marginBottom:"-2px"}} class="rounded-pill"/>  */}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={(e)=>{navigate('/accueil')}} style={{color:"white"}}>Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" onClick={(e)=>{navigate('/service')}} style={{color:"white"}}>Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" onClick={(e)=>{navigate('/historique')}} style={{color:"white"}}>Historique</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" onClick={(e)=>{navigate('/assistance')}} style={{color:"white"}}>Assistance</a>
        </li>
       
      </ul>
      <form class="d-flex">
        
        <button class="btn btn-danger" type="button" onClick={handledeconnexion}>Déconnexion</button>
      </form>
      
    
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar