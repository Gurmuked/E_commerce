import React from "react";

const MenuItem = ({title, imgurl})=>{
  return(
    <div style={{backgroundImage:`url(${imgurl})`}} className="menu-item  min-w-[30%] h-[240px] flex items-center justify-center flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px] border border-black">
    <div className="content h-[90px]  px-[25px] pt-[10px] mx-[7.5px] flex flex-col bg-white border border-gray-500">
      <h1 className="title font-bold mb-[6px] text-[22px] text-[#000000]">{title}</h1>
      <span className="subtitle font-light text-[16px] ">SHOP NOW</span>
    </div>
  </div>
  );
}

export default MenuItem;