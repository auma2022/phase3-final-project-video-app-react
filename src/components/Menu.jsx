import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
 import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
//import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
//import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='fle bg-[#1a1a1d] pl-[10px] h-[100vh] text-white'>
      <wrapper className='p-20'>
       <div className='flex gap-[5px] items-center font-bold mb-[25px]' >
        <img className='h-[25px]' src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" alt="app icon" />
        <p className='text-[14px]' >Video App</p>
        </div> 
      </wrapper>
      <div className='flex items-center gap-[20px] mb-1' >
        <HomeIcon/>
        Home
      </div>
      <div className='flex items-center gap-[20px] mb-1' >
      <ExploreOutlinedIcon />
          Explore
      </div>
      <div className='flex items-center gap-[20px] mb-1' >
      <SubscriptionsOutlinedIcon />
          Subscriptions
      </div> 
      <hr/> 
       <div className='flex items-center gap-[20px] mt-2' >
         <VideoLibraryOutlinedIcon />
          Library
      </div>
       <div className='flex items-center gap-[20px] mt-1' >
       <HistoryOutlinedIcon />
          History 
      </div>  
       <hr/> 
       <div className=' items-center gap-[20px] mt-2' >
        <p>Sign in to like videos, comment, and subscribe</p> <br />
          
            <button className='p-[3px] flex gap-[10px] bg-transparent border-solid border-[#2910b8] rounded-[2px] border-2  mb-2' >
              <AccountCircleOutlinedIcon />
              SIGN IN
            </button>
         
        </div> 
        <hr /> 
        <h1>BEST OF VIDEO APP</h1>
        <div className='flex items-center gap-[20px] mb-1'>
          <LibraryMusicOutlinedIcon />
          Music
        </div>
        <div className='flex items-center gap-[20px] mb-1'>
          <SportsBasketballOutlinedIcon />
          Sports
        </div>
        <div className='flex items-center gap-[20px]'>
          <SportsEsportsOutlinedIcon />
          Gaming
        </div>
        <div className='flex items-center gap-[20px]'>
          <MovieOutlinedIcon />
          Movies
        </div>
        <div className='flex items-center gap-[20px]'>
          <ArticleOutlinedIcon />
          News
        </div>
        <div className='flex items-center gap-[20px] mb-2'>
          <LiveTvOutlinedIcon />
          Live
        </div>
        <hr />
        <div className='flex items-center gap-[20px] mt-1'>
          <SettingsOutlinedIcon />
          Settings
        </div>
        <div className='flex items-center gap-[20px]'>
          <FlagOutlinedIcon />
          Report
        </div>
        <div className='flex items-center gap-[20px]'>
          <HelpOutlineOutlinedIcon />
          Help
        </div>


    </div>
  )
}

export default Menu