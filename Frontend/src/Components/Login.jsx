import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

        const onSubmit = async (data) => {
          const userInfo={
            email: data.email,
            password: data.password,
          }
          await axios
          .post("https://bookstoreapp-backend-8y5k.onrender.com/users/login", userInfo)
          .then((res) => {
            console.log(res.data);
            if(res.data){
              document.getElementById("my_modal_3").close();
              toast.success("Login successfully");
              setTimeout(() => {
                window.location.reload();
              }, 1000);
              
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
          }).catch((err) => {
            if(err.response){
              console.log(err);
              toast.error("Error"+ err.response.data.message);
              setTimeout(() => {}, 2000);
            }
          });
      }

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link 
            to='/' 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-5">
            <div>
              <span>Email</span>
              <label className="input input-bordered flex items-center gap-2 mt-2">
                <input
                  type="email"
                  className="grow"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </label>
            </div>
            <div className="mt-5">
              <span className="">Password</span>
              <label className="input input-bordered flex items-center gap-2 mt-2">
                <input
                  type="password"
                  className="grow"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </label>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-pink-400 rounded-lg text-white px-4 py-3">
              Login{" "}
            </button>
            <p>
              Not registered?
              <Link to="/signup">
              <span className=" text-blue-600 underline cursor-pointer">
                SignUp
              </span>{" "}
              </Link>
              
            </p>
          </div>
          </form>
        </div>
        
      </dialog>
    </>
  );
};

export default Login;
