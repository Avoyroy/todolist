import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import "./index"
const Todo = () => {

    const [val, setVal] = useState("");
    const [data, setData] = useState([])
    const todoEvent = (e) => {
        setVal(e.target.value);
    }

    const onSubmit = () => {
        setData([...data, val])
    }


    return (
        <>
            <Form.Group className="mb-2" controlId="todoInput">
                <Form.Control type="text" placeholder="Enter Todo" onChange={todoEvent} />
            </Form.Group>
            <Button className="mx-2" variant="primary" type="submit" onClick={onSubmit}>
                Add-Todo
            </Button>

            {data.map((val) => {
                return <div contentEditable className={val.complete ? "strike" : ""} key={val}>{val}</div>;
            })}
        </>


    )
}

export default Todo;