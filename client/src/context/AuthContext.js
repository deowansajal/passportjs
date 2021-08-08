import {
    useEffect,
    createContext,
    useState,
    useCallback,
    useContext,
} from 'react'
import axios from 'axios'

export const AuthContext = createContext({
    getCurrentUser: () => {},
    logout: () => {},
    user: null,
    isAuthenticated: false,
    isLoading: false,
})

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated')
    )
    const [isLoading, setIsLoading] = useState(false)

    const getCurrentUser = useCallback(() => {
        setIsLoading(true)
        axios({
            url: '/api/auth/me',
        })
            .then(({ data }) => {
                console.log(data)
                setIsAuthenticated(true)
                localStorage.setItem('isAuthenticated', true)
                setUser(data.user)
            })
            .catch(err => {
                setUser(null)
                setIsAuthenticated(false)
                console.log(err.response.status)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    const logout = () => {
        console.log('clicked...')
        axios({
            method: 'post',
            url: '/api/auth/logout',
            withCredentials: true,
        }).then(() => {
            localStorage.removeItem('isAuthenticated')
            setUser(null)
            setIsAuthenticated(false)
        })
    }

    const value = {
        getCurrentUser,
        user,
        setUser,
        isAuthenticated,
        isLoading,
        logout,
    }

    useEffect(() => {
        getCurrentUser()
    }, [getCurrentUser])

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
