import Axios from 'axios'

const axiosConfig = () => {
    const AUTH_TOKEN = localStorage.getItem('token')
    Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
        ? AUTH_TOKEN
        : null
}

export default axiosConfig
