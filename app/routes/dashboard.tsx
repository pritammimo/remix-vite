import { Outlet } from '@remix-run/react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>dashboard
        <Outlet/>
    </div>
  )
}

export default Dashboard