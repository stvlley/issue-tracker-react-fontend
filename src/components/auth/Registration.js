import React from 'react'

export default function Registration() {




    const state = {
        email: "",
        password: "",
        password_confirmation: "",
        registrationErrors: ""


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
    }


    const handleChange = (e) => {
        e.preventDefault()
        console.log('handle change', e)
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email' value={this.state.email} onChange={handleChange} />

                <input type="password" name="password" placeholder='Password' value={this.state.password} onChange={handleChange} />

                <input type="password" name="password_confirmation" placeholder='Password Confirmation' value={this.state.password} onChange={handleChange} />

            </form>
        </div>

    )
}







// constructor(props) {
//     super(props);

//     // set default state in object
    


// }
