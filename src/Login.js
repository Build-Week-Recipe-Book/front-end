import React from 'react'

const Login = () => {
    return (
        <div>
            
            <form>

                <label>Username:
                    <input type='text' name='username' />
                </label>

                <br />

                <label>Password:
                    <input type='text' name='password' />
                </label>

                <br />

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
