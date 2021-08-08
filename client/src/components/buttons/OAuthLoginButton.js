import React from 'react'
import Button from 'react-bootstrap/Button'

const OAuthLoginButton = ({
    onClick,
    variant,
    children,
    altText,
    image,
    ...props
}) => {
    return (
        <Button
            {...props}
            onClick={onClick}
            variant={variant}
            className="w-100 mb-4 d-flex justify-content-between align-items-center p-0 fs-5"
        >
            <img
                width="45"
                src={image}
                alt={altText}
                className="bg-white p-2 "
            />
            <span className="text-center flex-grow-1">{children}</span>
        </Button>
    )
}

export default OAuthLoginButton
