import React, { Component } from 'react'
import logo from '../../logo.svg'
import './navbar.scss'

export default class Navbar extends Component {
    render() {
        return (
            <div className = "navbar">
                <div>
                    <img src={logo} alt= "city tiurs logo"></img>
                </div>
                <div className = "nav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Tours</li>
                    </ul>

                </div>
            </div>
        )
    }
}
