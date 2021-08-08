import React from 'react'
import Button from 'react-bootstrap/Button'

const SubmitButton = ({ children }) => {
    return (
        <Button
            style={{ borderRadius: '40px' }}
            type="submit"
            className="text-uppercase w-100 mt-3"
        >
            {children}
        </Button>
    )
}

export default SubmitButton
