import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <DndProvider backend={HTML5Backend}>
     <QueryClientProvider client={queryClient}>
     <div className='max-w-7xl mx-auto'>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider> 
      </AuthProvider>
         <Toaster />
     </div>
     </QueryClientProvider>
     </DndProvider>

  </React.StrictMode>,
)
