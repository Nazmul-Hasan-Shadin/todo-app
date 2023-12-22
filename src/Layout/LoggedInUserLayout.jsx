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

    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
    <div className='p-16'>
    <Outlet ></Outlet>
   </div>
  
  </div> 
  <div className="drawer-side z-[12]">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
  
    <ul className="menu p-4 w-[206px] md:w-80 min-h-full bg-base-200 text-base-content">
    <div className="avatar online lg:left-24 pb-5">
  <div className=" w-14 lg:w-24 flex  rounded-full">
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