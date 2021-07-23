import React, { useState } from 'react'
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().required('Username is required for login').min(4, 'Username must be at least 4 characters'),
    password: yup.string().required('Password is required for login').min(8, 'Password must be at least 8 characters')
})

const Login = () => {

    //States
    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    //Change Handler
    const change = event => {
        const { name, type, value, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({ ...form, [name]: valueToUse })
    }

    return (
        <div>
            
            <form>

                <label>Username:
                    <input type='text' name='username' value={form.username} onChange={change} />
                </label>

                <br />

                <label>Password:
                    <input type='text' name='password' value={form.password} onChange={change} />
                </label>

                <br />

                <label>Remember my info:
                    <input type='checkbox' name='remember' checked={form.remember} onChange={change} />
                </label>

                <button>Login</button>

            </form>
        </div>
    )
}

export default Login
