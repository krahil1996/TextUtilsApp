import React from 'react'
import logo from '../assets/logo_light.png'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">
                    <img src={logo} alt={props.title} width="32" height="32" /> <b>{props.title}</b>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light hover:text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     title: 'Set Tile here',
//     aboutText: 'Set about'
// }