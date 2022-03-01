import React from 'react'
import "./SidebarOption.css"

function SidebarOption({text, active, Icon, children}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2> 
    </div>
  )
}

export default SidebarOption