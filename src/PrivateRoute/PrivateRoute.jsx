import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    // const location=useLocation()
   const{user,loading}=useContext(AuthContext)



   if (loading) {
    return <span className="loading loading-ball loading-lg"></span>
 }
    if (user ) {
        return children
    }


    return <Navigate  to={'/login'}></Navigate>


};

export default PrivateRoute;