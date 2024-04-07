import { ClientLoaderFunctionArgs, Outlet, redirect,useLoaderData } from '@remix-run/react'
import Cookies from 'js-cookie'
import React from 'react'
export async function clientLoader({params}:ClientLoaderFunctionArgs) {
  const cookiesdata=await Cookies.get('token')
  if(cookiesdata==="12345678"){
   return redirect('/')
  }
  else return {
    token:cookiesdata
  }
}
const Dashboard = () => {
  const data=useLoaderData();
  console.log(data)
  return (
    <div>dashboard
        <Outlet/>
    </div>
  )
}

export default Dashboard