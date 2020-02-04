import React, { Component } from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signUp: false,
        };

        this.toggleSignUp = this.toggleSignUp.bind(this);
    }

    toggleSignUp() {
        this.setState({signUp: !this.state.signUp});
    }

    render() {
        if (this.state.signUp)
            return <SignUp toggleSignUp={this.toggleSignUp}/>;
        else
            return <SignIn toggleSignUp={this.toggleSignUp}/>;
    }
}
