import React from "react";
import Image from 'next/image'
import group from "../../public/Group 176.png"

const Sponsors = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
     <div className="z-10 flex items-center justify-center w-full mt-20">   
       <div className="font-clash text-white text-5xl lg:text-7xl font-bold leading-[127.92px] text-center">
         Previous Sponsors
       </div> 
    </div> 
     <div className="z-0 flex items-center justify-center w-full">
      <Image
        src={group}
        width={650}
        height={100}
        alt="Sponsors"
        />
    </div>
  </div>
  )
}

export default Sponsors;
