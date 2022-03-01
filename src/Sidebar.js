import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

import Button from '@mui/material/Button';

import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className="sidebar">
        {/* Twitter Icon */}
        <TwitterIcon className="sidebar__twitterIcon" />

        <SidebarOption text="Home" Icon={HomeIcon} active></SidebarOption>
        <SidebarOption text="Search" Icon={SearchOutlinedIcon} ></SidebarOption>
        <SidebarOption text="Profile" Icon={PersonOutlineOutlinedIcon} ></SidebarOption>
        <SidebarOption text="Notification" Icon={NotificationsActiveOutlinedIcon} ></SidebarOption>

        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}
        {/* sidebarOption */}

        {/* Tweet button */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar