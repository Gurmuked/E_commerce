import React from "react";

const Header = ()=>{
  return(
    <div>
      <div className="flex justify-between bg-red-700 p-4">
        <div className="text-4xl bg-white-700">left</div>
        <div className="text-4xl bg-white-700">middle</div>
        <div className="text-4xl bg-white-700">right</div>
      </div>
    </div > 
  )
}
export default Header;