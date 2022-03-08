import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import SidebarOption from './SidebarOption'
import {useRecoilValue} from 'recoil'
import {useNavigate} from 'react-router-dom'

import { userAtom } from './_state'
function Sidebar() {
  
const user = useRecoilValue(userAtom)
const navigate = useNavigate()
return (
    <div className="sidebar">
        {/* Twitter Icon */}
        <Link to="/"><TwitterIcon className="sidebar__twitterIcon" /></Link>

        <SidebarOption text="Home" to={"/home"} Icon={HomeIcon} active></SidebarOption>
        <SidebarOption text="Profile" to={`/profile/${user.username}`} Icon={PersonOutlineOutlinedIcon} ></SidebarOption>
        <SidebarOption text="Search" to={"#/search"} Icon={SearchOutlinedIcon} ></SidebarOption>
        <SidebarOption text="Notification" to={"#/notification"} Icon={NotificationsActiveOutlinedIcon} ></SidebarOption>

        {/* sidebarOption */}
        {/* sidebarOption */}

        {/* Tweet button */}
        <Button onClick={()=> navigate(`./profile/${user.username}`)} className="sidebar__tweet" fullWidth>{user.displayName} <br/> @{user.username}</Button> 
    </div>
  )
}

export default Sidebar