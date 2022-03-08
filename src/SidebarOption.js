import React from 'react'
import "./SidebarOption.css"
import {Link} from "react-router-dom";

function SidebarOption({text, active, Icon, children, to}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon /><h2><Link to={to}>{text}</Link></h2>    
    </div>
  )
}

export default SidebarOption