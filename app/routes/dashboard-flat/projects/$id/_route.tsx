import { ClientLoaderFunctionArgs, useLoaderData } from '@remix-run/react'
import React from 'react'
export async function clientLoader({params}:ClientLoaderFunctionArgs) {
  return params.id
}
const route = () => {
  const data = useLoaderData<typeof clientLoader>();
  console.log(data)
  return (
    <div>route</div>
  )
}

export default route