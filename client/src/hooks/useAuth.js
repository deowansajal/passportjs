// import { useState, useCallback, useEffect } from 'react'
// import axios from 'axios'

// const useAuth = () => {
//     // const [isAuthenticated, setIsAuthenticated] = useState(false)
//     const [user, setUser] = useState(null)

//     useEffect(() => {
//         axios({
//             url: '/api/auth/me',
//         }).then(({ data }) => {
//             console.log(data)
//             setUser(data.user)
//             console.log(isAuthenticated)
//             setIsAuthenticated(true)
//         })
//     }, [isAuthenticated])

//     return { isAuthenticated, setIsAuthenticated, user, setUser }
// }

// export default useAuth
