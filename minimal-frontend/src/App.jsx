import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Userform from './components/Userform'
import UserRegistration from './components/UserRegistration'
import ProtectedRoute from './ProtectedRoute'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Root_Layout from './Root_Layout';
function App() {
  const BrowserRouterObj = createBrowserRouter([
    {
      path: '',
      element: <Root_Layout/>,
      children: [
        {
          path: '',
          element: (
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          )
        },
        {
          path: '/login',
          element: <Userform />
        },
        {
          path: '/register',
          element: <UserRegistration />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={BrowserRouterObj}/>
  )
}

export default App