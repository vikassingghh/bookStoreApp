//import React from 'react'

import { Link } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="flex h-screen justify-center items-center">
      <div  className="  w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Sign Up</h3>
          <div className="mt-5">
          <div>
              <span>Name</span>
              <label className="input input-bordered flex items-center gap-2 mt-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter your name"
                  {...register("text", { required: true })}
                  />
                  {errors.text && <span>This field is required</span>}
              </label>
            </div>
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
              Signup{" "}
            </button>
            <p>
              Have account?
              
              <span className=" text-blue-600 underline cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                Login
              </span>{" "}
              <Login/>
            </p>
          </div>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default SignUp
