import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <div className='max-w-7xl mx-auto'>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider> 
      </AuthProvider>
         <Toaster />
     </div>
     </QueryClientProvider>

  </React.StrictMode>,
)
