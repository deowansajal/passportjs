import React from 'react'

import FormWrapper from '../components/utils/FormWrapper'
import OAuthLoginButton from '../components/buttons/OAuthLoginButton'

const Login = () => {
    const facebookLoginHandler = e => {
        window.location.href = 'http://localhost:4000/api/auth/facebook'
    }
    const googleLoginHandler = e => {
        window.location.href = 'http://localhost:4000/api/auth/google'
    }
    const twitterLoginHandler = e => {
        window.location.href = 'http://localhost:4000/api/auth/twitter'
    }
    const githubLoginHandler = e => {
        window.location.href = 'http://localhost:4000/api/auth/github'
    }

    return (
        <FormWrapper isLoading={false}>
            <div
                className="d-flex flex-column justify-content-center"
                style={{ marginTop: '5rem' }}
            >
                <h1 className="mb-5  text-uppercase">Sign in</h1>
                <OAuthLoginButton
                    onClick={facebookLoginHandler}
                    image="/images/facebook.png"
                    altText="Facebook Logo"
                    style={{ backgroundColor: '#4267B2' }}
                >
                    Sign in with Facebook
                </OAuthLoginButton>

                <OAuthLoginButton
                    onClick={twitterLoginHandler}
                    image="/images/twitter.png"
                    altText="Google Logo"
                    style={{
                        color: '#222',
                        borderColor: '#F4F4F4',
                        backgroundColor: '#f4f4f4',
                        boxShadow:
                            '-2px -2px 3px rgba(249, 249, 249, .9), 2px 2px 3px rgba(249, 249, 249, .9)',
                    }}
                >
                    Sign in with Twitter
                </OAuthLoginButton>
                <OAuthLoginButton
                    onClick={googleLoginHandler}
                    image="/images/google.png"
                    altText="Google Logo"
                    style={{ backgroundColor: '#4285F4' }}
                >
                    Sign in with Google
                </OAuthLoginButton>

                <OAuthLoginButton
                    onClick={githubLoginHandler}
                    image="/images/github.png"
                    altText="Github Logo"
                    style={{ backgroundColor: '#333333' }}
                >
                    Sign in with Github
                </OAuthLoginButton>
            </div>
        </FormWrapper>
    )
}

export default Login
