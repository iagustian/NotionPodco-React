import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar">
        <Link to="/" className="navbar-logo">
          {props.logo}
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="navbar-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="navbar-nav"
          >
            <Link to="/" className="navbar-navlink button-clean button">
              {props.button}
            </Link>
            <Link
              to="/services"
              className="navbar-navlink1 button-clean button"
            >
              {props.button1}
            </Link>
            <Link
              to="/collection"
              className="navbar-navlink2 button-clean button"
            >
              {props.button11}
            </Link>
            <button className="navbar-button button-clean button">
              {props.button3}
            </button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="navbar-btn-group">
          <div className="navbar-socials">
            <button className="social button">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="navbar-image"
              />
            </button>
          </div>
          <button className="button">{props.view}</button>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <button className="button navbar-button1">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                className=""
              ></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="navbar-nav1"
          >
            <div className="navbar-container1">
              <span className="navbar-logo1">{props.logo1}</span>
              <div data-thq="thq-close-menu" className="navbar-menu-close">
                <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="navbar-nav2"
            >
              <span className="navbar-text">{props.text}</span>
              <span className="navbar-text1">Services</span>
              <span className="navbar-text2">Collection</span>
              <span className="navbar-text3">{props.text4}</span>
            </nav>
            <div className="navbar-container2">
              <Link
                to="/collection"
                className="navbar-browse-our-collection button"
              >
                Browse our collection
              </Link>
              <button className="button">{props.register}</button>
            </div>
          </div>
          <div className="navbar-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="navbar-icon4">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  button11: 'Collection',
  logo: 'NotionPod.co',
  register: 'Hire us!',
  button3: 'Blog',
  button: 'Home',
  imageSrc: '/Icons/twitter.svg',
  text: 'About',
  text4: 'Blog',
  view: 'Hire us!',
  button1: 'Services',
  rootClassName: '',
  imageAlt: 'image',
  logo1: 'NotionPod.co',
}

Navbar.propTypes = {
  button11: PropTypes.string,
  logo: PropTypes.string,
  register: PropTypes.string,
  button3: PropTypes.string,
  button: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  view: PropTypes.string,
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  logo1: PropTypes.string,
}

export default Navbar
