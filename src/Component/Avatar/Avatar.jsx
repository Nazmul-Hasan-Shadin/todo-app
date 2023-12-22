import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { RxAvatar } from "react-icons/rx";

const Avatar = () => {
  const {user}=useContext(AuthContext)
    return (
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
          {  user?.photoURL?   <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />: <RxAvatar className='text-5xl' />}
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    
    );
};

export default Avatar;