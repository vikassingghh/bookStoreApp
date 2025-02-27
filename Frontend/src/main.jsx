import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Courses from './Courses.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import SignUp from './Components/SignUp.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider, { useAuth } from './Components/Context/AuthContext.jsx';

// ✅ Correct: Create a wrapper component
const AppWithAuth = () => {
  const [authUser,setauthUser] = useAuth(); // Now it is inside a component

  console.log(authUser); // Log user data correctly

  // Define router inside the component to use authUser
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { 
      path: "/course", 
      element: authUser ? <Courses /> : <Navigate to="/signup" /> // 🔥 Conditionally render Courses or redirect to SignUp
    },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/signup", element: <SignUp /> },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppWithAuth />  
      <Toaster />
    </AuthProvider> 
  </React.StrictMode>
);
