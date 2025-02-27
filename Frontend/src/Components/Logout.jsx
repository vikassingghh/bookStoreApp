import React from 'react'
import { useAuth } from './Context/AuthContext'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setauthUser] = useAuth();
    const handleLogout =()=>{
        try {
            setauthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setInterval(() => {
                window.location.reload(); 
            }, 1000);
            
        } catch (error) {
            toast.error("Error :"+ error.message);
            setInterval(() => {
                
            }, 2000);
        }
    }
  return (
    <>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout
