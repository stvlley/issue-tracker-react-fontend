import React, {useContext} from 'react'
import { LoginContext } from '../contexts/LoginContext'


export default function Profile() {

    const {email} = useContext(LoginContext)
  return (
    <>
    <h1>Profile</h1>
    <h2>{email}</h2>

    </>
  )
}
