import React from 'react';

export default class LoginFields extends React.Component {
    render() {
        return (
            <div className="form">
                <input className="form-control py-3 my-2" placeholder="Username"></input>
                <input className="form-control py-3 my-2" placeholder="Password"></input>
            </div>
        );
    }
}