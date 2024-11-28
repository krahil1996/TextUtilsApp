import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} border-bottom`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <span className={`bi bi-input-cursor-text p-1`}></span>
                    <b className="p-1">{props.title}</b>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <button className={`btn btn-${props.mode} `}><span className="bi bi-moon-fill mx-1"></span>{`Enable ${props.mode} Mode`}</button>

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
Navbar.defaultProps = {
    title: 'Set Tile here',
    aboutText: 'Set about'
}