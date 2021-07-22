import React from 'react'

const SignUp = () => {
    return (
        <div className='formContainer'>
            <form>
                <label>Name:
                    <input type='text' name='name' />
                </label>
                <br />
                <label>Email:
                    <input type='text' name='email' />
                </label>
                <br />
                <label>Username:
                    <input type='text' name='username' />
                </label>
                <br />
                <label>Password:
                    <input type='text' name='password' />
                </label>
                <br />
                <label>Terms of Service:
                    <input type='checkbox' name='terms' />
                </label>
            </form>
        </div>
    )
}

export default SignUp
