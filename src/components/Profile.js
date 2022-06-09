import React, {useContext} from 'react'
import { LoginContext } from '../contexts/LoginContext'


export default function Profile() {

    const {email, password} = useContext(LoginContext)
    console.log(password)
  return (
    <>
    <h1>Profile</h1>
    <h2>username: {email}</h2>
    <h2>password: {password}</h2>

    </>
  )
}
