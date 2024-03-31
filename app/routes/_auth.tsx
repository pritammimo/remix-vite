import { Outlet } from '@remix-run/react'
import React from 'react'

const Auth = () => {
  return (
    <main>
        <div>Header</div>
     <Outlet/>
    </main>
  )
}

export default Auth