import React from 'react'
import Sidebar from './Sidebar'
import Widgets from './Widgets'

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">

      {/* Sidebar */}
      <Sidebar />

      {/* Feeds */}
      <Outlet />

      {/* Widget */}
      <Widgets />

    </div>
  )
}

export default Layout