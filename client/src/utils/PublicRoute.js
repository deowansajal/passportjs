import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const { isAuthenticated } = useAuth()

    return (
        <Route
            exact
            {...rest}
            render={({ location, ...props }) => {
                if (!isAuthenticated) {
                    return <Component {...props} />
                }
                if (isAuthenticated && restricted) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/dashboard',
                                state: { from: location },
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default PublicRoute
