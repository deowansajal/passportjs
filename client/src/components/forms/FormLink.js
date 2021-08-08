import React from 'react'
import { Link } from 'react-router-dom'

const FormLink = ({ to, text, linkText }) => {
    return (
        <div className="mt-4">
            <span className="me-2">{text}</span>
            <Link to={to}>{linkText}</Link>
        </div>
    )
}

export default FormLink
