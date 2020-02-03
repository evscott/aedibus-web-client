import React, { Component, Fragment } from 'react';
import {Header, Footer} from './Layouts'
import {Login} from './Authentication'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Login/>
                <Footer/>
            </Fragment>
        )
    }
}
