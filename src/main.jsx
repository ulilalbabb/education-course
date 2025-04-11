import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './pages/login'
import Register from './pages/register'
import Opening from './pages/opening'
import Homepage from './pages/homepage'
import Collection from './pages/collection'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Opening/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/homepage',
    element: <Homepage/>
  },
  {
    path: '/collection',
    element: <Collection/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
