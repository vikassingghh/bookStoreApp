import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Courses from './Courses.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import SignUp from './Components/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/course",
    element: <Courses></Courses>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>,
)
