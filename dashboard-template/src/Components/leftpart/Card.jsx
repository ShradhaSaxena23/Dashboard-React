import React from 'react';
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";

function Card({ data }) {
    const {title,desc}= data;
    {/*var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };*/}
    
                return (
                    <div >
{/*<Slider {...settings}>*/}


     
<div className='w-full py-2 px-2 item-center justify-center flex bg-white shadow-2xl border border-black-400 shadow-gray-300 mb-4'>
  <div className="flex items-center justify-center space-x-4 w-full">
    <div className="bg-[#DBEEF4] rounded-full py-2 px-2">
      <span></span>
    </div>
    <div className="w-full space-y-1">
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm">{desc}</p>
    </div>
  </div>
</div>

                        
                      {/* </Slider> */}
                    </div>
                );
       
    
}

export default Card;
