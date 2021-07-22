import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').min(11, 'Email must be at least 11 characters'),
    username: yup.string().required('Username is required').min(4, 'Username must be atleast 4 characters'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    terms: yup.boolean().oneOf([true], 'You must agree to the Terms of Service'),
})

const SignUp = () => {

    //States
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        terms: false,
    })

    const [disabled, setDisabled] = useState(true)

    //Change Handler
    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({ ...form, [name]: valueToUse })
    }

    //Schema Verification
    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

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

                <button disabled={disabled}>Submit</button>

            </form>
        </div>
    )
}

export default SignUp
