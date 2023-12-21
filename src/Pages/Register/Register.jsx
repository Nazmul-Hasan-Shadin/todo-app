import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const  {handleCreateUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
      
        const form= new FormData(e.currentTarget)
        console.log(form);
        const name= form.get('name');
        const email= form.get('email')
        const password= form.get('password')
     
    //    
        

        
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
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-red-700">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;