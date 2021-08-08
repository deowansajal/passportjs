import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './InputGroup.module.css'

const InputGroup = ({
    type = 'text',
    name,
    value,
    label,
    onChange,
    controlId,
}) => {
    return (
        <Form.Group controlId={controlId} className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                className={styles.input}
                onChange={onChange}
                type={type}
                value={value}
                name={name}
            />
        </Form.Group>
    )
}

export default InputGroup
