import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
import photo from '../img/FoodPhoto3.jpg'

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').min(11, 'Email must be at least 11 characters'),
    username: yup.string().required('Username is required').min(4, 'Username must be at least 4 characters'),
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

    //Submit Handler
    const submit = event => {
        event.preventDefault()
        const newUser = {name: form.name.trim(), email: form.email.trim(), username: form.username.trim(), password: form.password.trim(), terms: form.terms }
        axios.post('https://reqres.in/api/users', newUser)
            .then(res => {
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
        <HomeDiv className='formContainer'>
            <Form onSubmit={submit}>

                <label>Name:
                    <input type='text' name='name' value={form.name} onChange={change} />
                </label>

                <br/>
                <br/>

                <label>Email:
                    <input type='text' name='email' value={form.email} onChange={change} />
                </label>

                <br/>
                <br/>

                <label>Username:
                    <input type='text' name='username' value={form.username} onChange={change} />
                </label>

                <br />
                <br/>

                <label>Password:
                    <input type='text' name='password' value={form.password} onChange={change} />
                </label>

                <br />
                <br/>

                <label>Terms of Service:
                    <input type='checkbox' name='terms' checked={form.terms} onChange={change} />
                </label>

                <br />
                <br/>

                <Button disabled={disabled}>Submit</Button>

            </Form>

            <div style={{ color: 'red'}}>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </HomeDiv>
    )
}

const HomeDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
padding: 7% 0;
background-image: url(${photo});
`

const Button = styled.button`
background: maroon;
color: white;
height: 30px;
border-radius: 5px;
`

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: white;
padding: 2%;
border: solid 3px black;
border-radius: 5%;
opacity: 0.90;
`

export default SignUp
