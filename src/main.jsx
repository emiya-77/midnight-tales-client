import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/PublicRoute'
import AuthProvider from './auth/AuthProvider/AuthProvider'
import DataProvider from './data/DataProvider/DataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>,
)
