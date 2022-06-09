import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
const Registration = () => {
    // console.log(propsData);
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    let navigate = useNavigate();

    const nameEvent = (event) => {
        setName(event.target.value);
    }
    const emailEvent = (event) => {
        setEmail(event.target.value);
    }
    const passEvent = (event) => {
        setPass(event.target.value)
    }



    const onSubmit = () => {
        localStorage.setItem('email', [name, email, pass]);
    }

    const onLogin = () => {
        navigate(`./login`)
    }

    return (<Form>
        <Form.Group className="mb-2" controlId="formName">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" onChange={nameEvent} />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={emailEvent} />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={passEvent} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSubmit}>
            SignUp
        </Button>
        <Button className="mx-2" variant="primary" type="button" onClick={onLogin} >
            Login
        </Button>
    </Form>)
}
export default Registration;
