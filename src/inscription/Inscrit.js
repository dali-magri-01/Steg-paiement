import React, { useState } from 'react'
import "./InscritStyle.css"
import { useNavigate } from 'react-router-dom';
const Inscrit = () => {
  const navigate=useNavigate();
const[nom,setnom]=useState("");
const[prenom,setprenom]=useState("");
const[cin,setcin]=useState("");
const[dateNais,setdaten]=useState("")
const[email,setemail]=useState("")
const[motdepasse,setpass]=useState("")
const[Cpass,setCpass]=useState("")
const handleSubmit=(e)=>{
  e.preventDefault();
  const utilisateur ={nom,prenom,cin,email,motdepasse,dateNais};
  console.log(utilisateur);
    fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(utilisateur)
        }).then(()=>{
            console.log("utilisateur ajoute");
            navigate("/");
        })
}



  return (
    <div className='parent1'>
    <div className='body1'>
    <div className='login-card1'>
    
        <h2>Inscription</h2>
        <h3>Entrer vos coordonner </h3>
        <form className='login-form1' onSubmit={handleSubmit}>
            <input type="text" placeholder='Nom' value={nom} onChange={(e)=>setnom(e.target.value)} required/>


            <input type="text" placeholder='Prenom' value={prenom} onChange={(e)=>setprenom(e.target.value)} required/>
            <input type="number" placeholder='CIN' value={cin} onChange={(e)=>setcin(e.target.value)}  required/>
            <input type="text" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}  required/>
            
            <input type="date" placeholder='datenaissance' value={dateNais} onChange={(e)=>setdaten(e.target.value)} required/>
            
            
            
            <input type="password" placeholder='mot de passe' value={motdepasse} onChange={(e)=>setpass(e.target.value)}/>
            <input type="password" placeholder='confirmer mot de passe' value={Cpass           } onChange={(e)=>setCpass(e.target.value)}/>
        
            <button>S'inscrire</button>
            <button type="button" class="btn btn-outline-info"onClick={()=>navigate("/")}>Back to login</button>
            


        </form>


    </div></div></div>
  )
}

export default Inscrit