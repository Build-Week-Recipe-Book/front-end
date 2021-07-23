import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    username: yup.string().required('Username is required for login').min(4, 'Username must be at least 4 characters'),
    password: yup.string().required('Password is required for login').min(8, 'Password must be at least 8 characters'),
    remember: yup.boolean(),
})

const Login = () => {

    //States
    const [form, setForm] = useState({
        username: '',
        password: '',
        remember: false,
    })

    const [disabled, setDisabled] = useState(true)

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        remember: false,
    })

    //Form Errors
    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch( err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    //Change Handler
    const change = event => {
        const { name, type, value, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setForm({ ...form, [name]: valueToUse })
    }

    //Submit Handler
    const submit = event => {
        event.preventDefault()
        const user = { username: form.username, password: form.password }
        axios.post('https://reqres.in/api/users', user)
            .then(() => {
                debugger
                console.log('post request working')
            })
            .catch(() => {
                console.log('post request did not work')
            })
    }

    //Schema Verification
    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return (
        <div className='formContainer'>
            
            <form onSubmit={submit}>

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

                <button disabled={disabled}>Login</button>

            </form>

            <div style={{ color: 'red' }}>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>

        </div>
    )
}

export default Login
