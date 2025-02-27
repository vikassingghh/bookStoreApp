import React from 'react'
const Card = ({item}) => {
  return (
    <>
      <div className=" card bg-white w-80 shadow-xl mt-10 hover:scale-110 transition-all duration-200 border-black">
  <figure>
    <img className="w-60"
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-black">
      {item.name}
      <div className="badge badge-secondary">Free</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-400 hover:text-white px-4 py-3 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
