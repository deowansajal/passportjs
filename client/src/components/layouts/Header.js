import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

import styles from './Header.module.css'

const Header = () => {
    const { isAuthenticated, logout } = useAuth()

    return (
        <header className="bg-light">
            <Container>
                <Navbar bg="light" variant="light" expand="lg">
                    <Navbar.Brand>
                        <Link
                            to="/dashboard"
                            className={`text-dark ${styles.link}`}
                        >
                            PassportJs
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {!isAuthenticated && (
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    className={`text-dark ${styles.link}`}
                                >
                                    Sign In
                                </Nav.Link>
                            )}

                            {isAuthenticated && (
                                <Nav.Link
                                    className={`text-dark ${styles.link}`}
                                    onClick={logout}
                                >
                                    Logout
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header
