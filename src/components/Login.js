import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [failed, setFailed] = useState(false)

    const findUser = (email, password) => {
        let userCheck = true
        props.users.map(user => {
            if (user.email === email && user.password === password) {
                props.setUser(user)
                userCheck = false 
            } 
        })
        setFailed(userCheck)

    }
    return (
        <div className="login-page">
        <h2>User Login</h2>
        <Form onSubmit={(e) => {
            e.preventDefault()
        }}>
        {failed? <p>Login failed. Please check credentials and try again</p> : null}
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Link to={failed? "/login" : "/dashboard"}>
        <Button onMouseDown={() => findUser(email, password)} variant="primary" type="submit">
            Submit
        </Button>
        </Link>
        </Form>
        </div>

    )
}


export default Login;