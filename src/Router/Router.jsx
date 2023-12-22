import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Register/Register';
import LoggedInUserLayout from '../Layout/LoggedInUserLayout';
import CreateTodo from '../Pages/Dashboard/CreateTodo/CreateTodo';
import CompletedTodos from '../Component/CompletedTodos';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

  const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
          { 
             path: '/login',
            element:<Login></Login>
        },
        { 
          path: '/register',
         element:<Register></Register>
     },
  
        ]
    },

  {
    path:'/dashboard',
    element: <PrivateRoute> <LoggedInUserLayout></LoggedInUserLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboard/create-todo',
        element: <CreateTodo></CreateTodo>
      },
      {
        path:'/dashboard/completed-todo',
        element:<CompletedTodos></CompletedTodos>
      }
    ]
  }

     



  ])
export default router;