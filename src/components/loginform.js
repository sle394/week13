import React from 'react';
import LoginFields from './login-fields';
import LoginButton from './login-button';
import Navigation from './navigation';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container py-3">
                <Navigation />

                <div className="border border-success rounded py-3 px-3 my-3">
                    <h3>Log In</h3>
                    <LoginFields />
                    <LoginButton />
                </div>
            </div>
        );
    }
}