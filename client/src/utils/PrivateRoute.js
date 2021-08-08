import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth()

    return (
        <Route
            exact
            {...rest}
            render={({ location, ...props }) => {
                if (!isAuthenticated) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location },
                            }}
                        />
                    )
                }

                return <Component {...props} />
            }}
        />
    )
}

export default PrivateRoute
