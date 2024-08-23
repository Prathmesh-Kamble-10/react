import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
// const router =  createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//     {
//       path:"",
//       element:<Home/>,
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//     path:"contact",
//     element:<Contact/>
//     }
//     ]
//   }
// ]) //first way to create a routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path = '' element={<Home />}/>
      <Route path = 'about' element={<About />}/>
      <Route path = 'contact' element={<Contact />}/>
      <Route path = 'user/:userid' element={<User />}/>
      <Route loader={githubInfoLoader} path = 'github' element={<Github />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
