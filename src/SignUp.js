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

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        terms: false,
    })

    //Form Errors
    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    //Change Handler
    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
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

            <div style={{ color: 'red'}}>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </div>
    )
}

export default SignUp
