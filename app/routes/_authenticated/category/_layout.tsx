import { Outlet, redirect } from '@remix-run/react'
import Cookies from 'js-cookie'
import React from 'react'
export async function clientLoader() {
    const cookiesdata=await Cookies.get('token')
    if(cookiesdata==='1234567'){
     return redirect('/')
    }
    else return {
      token:cookiesdata
    }
  }
const Categorielayout = () => {
    
  return (
    <div>Categorielayout
        <Outlet/>
    </div>
  )
}

export default Categorielayout