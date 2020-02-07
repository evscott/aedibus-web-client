import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Routes />
                </Router>
            </Fragment>
        )
    }
}
