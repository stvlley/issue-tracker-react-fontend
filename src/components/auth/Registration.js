import React, { useState } from 'react'

export default function Registration() {


     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")

    // const state = {
    //     email: "",
    //     password: "",
    //     password_confirmation: "",
    //     registrationErrors: ""
    // }
    console.log(email)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
        console.log(email)
        console.log(password)
    }


    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email'   onChange={(event) => {
                setEmail(event.target.value)
              }} />

                <input type="password" name="password" placeholder='Password'      onChange={(event) => {
                setPassword(event.target.value)
              }} />

                <input type="password" name="password_confirmation" placeholder='Password Confirmation'  onChange={handleChange} />

                <button type='submit' >Submit</button>

            </form>
        </div>

    )
}







// constructor(props) {
//     super(props);

//     // set default state in object
    


// }
