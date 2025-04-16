import React from "react";


const HomePage = () => {
  return(
    <div>
     <div className="homepage flex flex-column  items-center my-[10px] py-[20px] px-[80px]">
        <div className="directory-menu w-full  flex flex-wrap justify-space-between mx-auto">
          <div className="menu-item min-w-[33%] h-[240px] flex items-center justify-center flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px] border border-black">
            <div className="content h-[90px]  px-[25px] pt-[10px] mx-[7.5px] flex flex-col border border-gray-500">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">HATS</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item min-w-[30%] h-[240px] flex items-center justify-center flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px] border border-gray-500">
            <div className="content h-[90px] px-[25px] pt-[10px] mx-[7.5px] flex flex-col border  border-gray-500">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">JACKETS</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item min-w-[30%] h-[240px] flex items-center justify-center flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px] border border-gray-500">
            <div className="content h-[90px] px-[25px] pt-[10px] mx-[7.5px] flex flex-col  border border-gray-500">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">SNEAKERS</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item min-w-[30%] h-[240px] flex items-center justify-center flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px] border border-gray-500k">
            <div className="content h-[90px] px-[25px] pt-[10px] mx-[7.5px] flex flex-col  border border-gray-500k">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">WOMEN'S</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item min-w-[30%] h-[240px] flex items-center justify-center flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px] border border-gray-500">
            <div className="content h-[90px] px-[25px] pt-[10px] mx-[7.5px] flex flex-col  border border-gray-500">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">MEN'S</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
        </div>
     </div>
    </div>
  )

}
export default HomePage;