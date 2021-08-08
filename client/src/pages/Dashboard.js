import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
    const { user } = useAuth()

    return (
        <div>
            <h1> {user && user.name}</h1>
            <p> {user && user.email}</p>
        </div>
    )
}

export default Dashboard
