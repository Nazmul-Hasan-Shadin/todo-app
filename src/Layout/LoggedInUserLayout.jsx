import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const LoggedInUserLayout = () => {
  const {user}= useContext(AuthContext)
    return (
 <div className=' '>
 
 
 <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <div className='p-16'>
    <Outlet ></Outlet>
   </div>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
  
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    <div className="avatar online left-24 pb-5">
  <div className="w-24 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
      {/* Sidebar content here */}
     <li> <Link  to={'/dashboard/create-todo'}> Create Todo</Link></li>
     <li> <Link  to={'/dashboard/completed-todo'}> Completed Todos</Link></li>
    </ul>
  
  </div>
</div>
   
 

 </div>



 
    );
};

export default LoggedInUserLayout;