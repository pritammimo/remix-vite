import { ClientLoaderFunctionArgs, useLoaderData } from '@remix-run/react'
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from "axios";
export async function clientLoader({params}:ClientLoaderFunctionArgs) {
    return params.id
  }
const SingleCategory = () => {
    const id = useLoaderData<typeof clientLoader>();
    const {  data: postdetails } = useQuery(
        {
            queryKey: ['postdetails'],
            queryFn: async () => {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                return data
            },
        }
    );
      console.log(postdetails);
  return (
    <div>SingleCategory</div>
  )
}

export default SingleCategory