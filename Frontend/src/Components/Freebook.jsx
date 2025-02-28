import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
const Freebook = () => {
  const[book, setbook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("https://book-store-app-tan-eight.vercel.app/book");
        console.log(res.data);
        setbook(res.data.filter((data) => data.category === "Free"))
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 mb-20 ">
          <div>
            <h1 className="font-bold text-xl pb-2 text-black">Free Offered Courses</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              inventore esse numquam, nesciunt Autem, incidunt earum vel ut vero
              modi.
            </p>
          </div> 
            <Slider {...settings} className=" ">
              {book.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Slider>
        </div>
    </>
  );
};

export default Freebook;
