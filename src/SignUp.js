import React, { useState } from 'react'

const SignUp = () => {

    //States
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        terms: false,
    })

    //Change handler
    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({ ...form, [name]: valueToUse })
    }

    return (
        <div className='formContainer'>
            <form>
                
                <label>Name:
                    <input type='text' name='name' value={form.name} onChange={change} />
                </label>

                <br />

                <label>Email:
                    <input type='text' name='email' value={form.email} onChange={change} />
                </label>

                <br />

                <label>Username:
                    <input type='text' name='username' value={form.username} onChange={change} />
                </label>

                <br />

                <label>Password:
                    <input type='text' name='password' value={form.password} onChange={change} />
                </label>

                <br />

                <label>Terms of Service:
                    <input type='checkbox' name='terms' checked={form.terms} onChange={change} />
                </label>

                <br />

                <button>Submit</button>

            </form>
        </div>
    )
}

export default SignUp
