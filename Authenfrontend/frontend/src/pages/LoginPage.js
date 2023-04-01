import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext)
    return (
        <div>
            <form on onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter username" />
                <input type="password" name="password" placeholder="Enter password" />
                <input type="submit" />
            </form>

        </div>
    )
}

export default LoginPage