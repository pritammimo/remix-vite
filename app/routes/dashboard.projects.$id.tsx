import { json, LoaderFunctionArgs } from '@remix-run/node'
import { ClientLoaderFunctionArgs, useLoaderData } from '@remix-run/react'
import React from 'react'

export async function clientLoader({params}:ClientLoaderFunctionArgs) {
  return params.id
}
export default function Component() {
    const data = useLoaderData<typeof clientLoader>();
    console.log(data)
    return <>...</>;
  }