import React from "react";


const HomePage = () => {
  return(
     <div className="homepage flex flex-column w-[100%] mx-auto items-center my-[10px] py-[20px] px-[80px]">
        <div className="directory-menu w-100% h-auto flex flex-wrap justify-space-between">
          <div className="menu-item min-w-[33%] h-[240px] flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px]">
            <div className="content h-[240px] px-[25px] mx-[7.5px] flex flex-col items-center text-center justify-center border border-black">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">HATS</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item min-w-[30%] h-[240px] flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px]">
            <div className="content h-[240px] px-[25px] mx-[7.5px] flex flex-col items-center justify-center border border-black">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">JACKETS</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item min-w-[30%] h-[240px] flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px]">
            <div className="content h-[240px] px-[25px] mx-[7.5px] flex flex-col items-center justify-center border border-black">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">SNEAKERS</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item min-w-[30%] h-[240px] flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px]">
            <div className="content h-[240px] px-[25px] mx-[7.5px] flex flex-col items-center justify-center border border-black">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">WOMEN'S</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item min-w-[30%] h-[240px] flex-[1_1_auto] mt-0 mx-[7.5px] mb-[10px]">
            <div className="content h-[240px] px-[25px] mx-[7.5px] flex flex-col items-center justify-center border border-black">
              <h1 className="title font-bold mb-[6px] text-[22px] text-[#4a4a4a]">MEN'S</h1>
              <span className="subtitle font-light text-[16px]">SHOP NOW</span>
            </div>
          </div>
        </div>
     </div>
  )

}
export default HomePage;