import React, {  useState } from 'react'
import "./Loginstyle.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[posts,setPosts]=useState([]);
    const [message,setmessage]=useState("");

    


    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`http://localhost:8080/user/${email}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
            console.log(posts);
         })
         .catch((err) => {
            console.log(err.message); 
            setmessage("email ou mot de passe incorrecte");});
            if (posts.length===0)
            {console.log("aucun utlisateur avec ce email ")}    
            else
    {
       if( posts.motdepasse===password)
       {console.log("ok");
       localStorage.setItem('userSession', JSON.stringify({
        isLoggedIn: true,
        userId: posts.id,
        nomS:posts.nom,
        prenomS:posts.prenom,
        emailS:posts.email,
        cinS:posts.cin
        
      }));
        navigate("/accueil")
    }
       else {setmessage("password incorrecte");}
    }
        
    }


  return (
    <div id="main-wrapper" class="body shadow">
    <div class="row justify-content-center">
        <div class="col-xl-10 mt-3">
            <div class="card border-0">
                <div class="card-body p-0 ">
                    <div class="row no-gutters ">
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="mb-5">
                                    <h3 class="h4 font-weight-bold text-theme">Login</h3>
                                </div>

                                <h6 class="h5 mb-0">Welcome back!</h6>
                                <p class="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>
                                <p class="text-muted mt-2 mb-5" style={{color:"red"}}>{message}</p>

                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        
                                        <input type="text" class="form-control" value={email} id="exampleInputEmail1" onChange={(e)=>setemail(e.target.value)} required/>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" value={password} id="exampleInputPassword1" onChange={(e)=>setpassword(e.target.value)}required/>
                                    </div>
                                    <button  class="btn btn-secondary">Login</button>
                                    
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block rounded-right">
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                    
                                    <h4> Société tunisienne de l'électricité et du gaz</h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            

            <p class="text-muted text-center mt-3 mb-0">Don't have an account? <a  class="text-primary ml-1" onClick={(e)=>navigate("/inscrire")}>register</a></p>

            

        </div>
        
    </div>
    
</div>
  )
}

export default Login