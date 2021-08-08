import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/layouts/Header'
import { Container } from 'react-bootstrap'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="mt-5">
                <Container>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>
                        <PublicRoute
                            path="/login"
                            restricted={true}
                            component={Login}
                        />
                        <PrivateRoute path="/Dashboard" component={Dashboard} />
                    </Switch>
                </Container>
            </main>
        </BrowserRouter>
    )
}

export default App
