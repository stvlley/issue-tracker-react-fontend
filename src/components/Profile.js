import React  from 'react'

import useFetch from '../useFetch'

export default function Profile() {

    const {data, loading, error} = useFetch('http://localhost:4000/users')
   

    if (loading) return <h1>LOADING...</h1>

    if (error) console.log(error)
  return (
    <>
    <h1>Profile</h1>
    <h2>name: {data?.name}</h2>
    <h2>email: {data?.email}</h2>
    
    </>
  )
}
