import React, {useContext, useEffect} from 'react'
import { LoginContext } from '../contexts/LoginContext'


export default function Profile() {

    const {email, password} = useContext(LoginContext)
    console.log(password)

    useEffect(function() {
        console.log("Effect ran")
        fetch("http:localhost:4000/users")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

  return (
    <>
    <h1>Profile</h1>
    <h2>username: {email}</h2>
    <h2>password: {password}</h2>

    </>
  )
}
