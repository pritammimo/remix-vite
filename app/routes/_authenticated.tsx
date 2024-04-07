import { Outlet, redirect } from '@remix-run/react'
import Cookies from 'js-cookie'
import React from 'react'
export async function clientLoader() {
    const cookiesdata=await Cookies.get('token')
    if(cookiesdata===null){
     return redirect('/')
    }
    else return {
      token:cookiesdata
    }
  }
const Auth = () => {
  return (
    <main>
        <div>WithAuthenticated Header</div>
     <Outlet/>
    </main>
  )
}

export default Auth