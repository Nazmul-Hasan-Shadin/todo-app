import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const  {handleCreateUser,handleUpdateNamePhoto}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
      
        const form= new FormData(e.currentTarget)
        console.log(form);
        const name= form.get('name');
        const email= form.get('email')
        const photo= form.get('photo')
        const password= form.get('password')
     
    //    
        handleCreateUser(email,password)
        .then(res=>{
            console.log(res);
            handleUpdateNamePhoto(name,photo)
        })


        
    }
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleRegister} >
      
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photourl</span>
          </label>
          <input type="text" name="photo" placeholder="email" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-red-700">Register</button>
        </div>
        <span>Already have account?  <Link className="text-blue-600" to={'/login'}>Login</Link> </span>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;