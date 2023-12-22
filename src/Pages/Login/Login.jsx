import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const navigate= useNavigate()
  const  {signedInUser,handleGoogleSignIn}=useContext(AuthContext)
  const handleLogin=(e)=>{
      e.preventDefault()
    
      const form= new FormData(e.currentTarget)
      console.log(form);
      const name= form.get('name');
      const email= form.get('email')
      const password= form.get('password')
   
  //    
  signedInUser(email,password)
      .then(res=>{
          console.log(res);
          navigate('/dashboard/create-todo')
         
      })




      
  }


  const handleGoogle=()=>{
    handleGoogleSignIn()
    .then(res=>{
      navigate('/dashboard/create-todo')
    })
  }


    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <h2> Hello ,There 
            <span>welcome Back again</span>
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-red-700">Login</button>
           <span onClick={handleGoogle} className=" text-center pt-4">

           <FcGoogle className="text-4xl mx-auto" />

           </span>
           <span>Dont have account?  <Link className="text-blue-400" to={'/register'}> Register </Link> </span>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;