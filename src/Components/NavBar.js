import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function NavBar(props) {

  return (
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <div className="container-fluid">
          <div className="navbar-brand" href="/"><strong>{props.title}</strong></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link" to="/">Home</Link> */}
                <a className="nav-link" href="">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li> */}
            </ul>

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.changeBg} id="flexSwitchCheckDefault" />
              <label className="form-check-label " id='modeLabel'
                style={{ color: props.Mode === "light" ? "black" : "white" }}>Enable {props.Mode === "light" ? "Dark" : "Light"} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

NavBar.prototype = {
  title: PropTypes.string
}

NavBar.defaultProps = {
  title: "Set title here"
}