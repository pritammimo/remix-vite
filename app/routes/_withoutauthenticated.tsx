import { Outlet, redirect } from '@remix-run/react'
import Cookies from 'js-cookie'
import React from 'react'
export async function clientLoader() {
    const cookiesdata=await Cookies.get('token')
    if(cookiesdata==="12345678"){
     return redirect('/dashboard')
    }
    else return {
      token:cookiesdata
    }
  }
const Auth = () => {
  return (
    <main>
        <div>WithoutAuthenticated Header</div>
     <Outlet/>
    </main>
  )
}

export default Auth