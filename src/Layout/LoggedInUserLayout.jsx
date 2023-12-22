import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const LoggedInUserLayout = () => {
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