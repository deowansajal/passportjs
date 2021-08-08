import React from 'react'

const FormWrapper = ({ isLoading, children }) => {
    return (
        <div
            style={{
                maxWidth: '350px',
                margin: '0 auto',
            }}
        >
            <figure disabled={isLoading}>{children}</figure>
        </div>
    )
}

export default FormWrapper
