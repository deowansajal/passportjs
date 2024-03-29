import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import axiosConfig from './config/axios'

import AuthProvider from './context/AuthContext'

axiosConfig()

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
