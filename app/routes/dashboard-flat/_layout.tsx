import { Outlet } from '@remix-run/react'
import React from 'react'

const DashboardLayout = () => {
  return (
    <div>DashboardLayout
        <Outlet/>
    </div>
  )
}

export default DashboardLayout