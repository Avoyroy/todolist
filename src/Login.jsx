import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Todo from "./Todo";

const Login = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    let navigate = useNavigate();

    const emailEvent = (event) => {
        setEmail(event.target.value);
    }
    const passEvent = (event) => {
        setPass(event.target.value);
    }

    const onSubmit = () => {
        //e.preventDefault();
        const val = localStorage.getItem('email').split(",");
        if (email == val[1]) {
            if (pass == val[2]) {
                navigate(`/todo`)
                //console.log('hola hola')
            }
        }
    }

    return (
        <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={emailEvent} />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={passEvent} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onSubmit} >
                Login
            </Button>
        </Form>
    )
}

export default Login;