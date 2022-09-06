import React from 'react'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Navbar() {
  return (
    
      <div className="sticky top-0 bg-transparent h-[50px] ">
      <wrapper className="flex items-center justify-end h-[100px] p-[20px] relative">
        <div className='w-[400px] absolute left-0 right-0 m-auto flex items-center justify-between p-[5px] rounded-[3px] border-solid border-2 border-slate-300' >
          <input className="border-none bg-transparent text-black outline-none" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        
          <button className="p-[3px] flex gap-[10px] bg-transparent border-solid border-[#ff0000] rounded-[2px] border-2 mr-10 text-red-600">
            <AccountCircleOutlinedIcon /> 
            SIGN IN
          </button>
        
      </wrapper>
    </div>
    
  )
}

export default Navbar