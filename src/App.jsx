import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Gallery from './Components/Gallery/Gallery'
import Notfound from './Components/Notfound/Notfound'

function App() {
 let rout= createBrowserRouter([
    {path:'',element:<Layout/>, 
      children:[
        {path:'gallery',element:<Gallery/>},
        {index:true,element:<Home/>},
        {path:'about',element:<About/>},
        {path:'contact',element:<Contact/>},
        {path:'*',element:<Notfound/>},

        
      ]
    }
  ])

  return (
    <RouterProvider router={rout}></RouterProvider>
   
  )
}

export default App
