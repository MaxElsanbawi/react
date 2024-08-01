import React from 'react';
import Portfolio from '../src/componant/portfolio/Portfolio'
import './App.css'
import Layout from '../src/componant/layout/Layout'
import Home from './Home'
import About from '../src/componant/about/About'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact from './componant/Contact/Contact';
function App() {
  
let x= createBrowserRouter(
[
  { path: '', element: <Layout/>, children:[
    { path: '',element: <Home/>},
    { path: 'about',element: <About/>},
    { path: 'about',element: <About/>},
    { path: 'portfolio',element: <Portfolio/>},
    { path: 'contact',element: <Contact/>},

  ]}
]
 )

  return (

 <RouterProvider router={x}>

 </RouterProvider>
  )
}

export default App
