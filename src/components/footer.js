import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-main">
        <div className="footer-branding">
          <div className="footer-heading">
            <h2 className="footer-logo">{props.logo}</h2>
            <p className="footer-caption">{props.caption}</p>
          </div>
          <div className="footer-socials">
            <a
              href={props.linkTwitter1}
              target="_blank"
              rel="noreferrer noopener"
              className="footer-twitter social button"
            >
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="footer-image"
              />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-list">
            <h3 className="footer-heading1">{props.heading}</h3>
            <div className="footer-items">
              <Link to="/services" className="footer-link button-clean button">
                Services
              </Link>
              <Link
                to="/collection"
                className="footer-link1 button-clean button"
              >
                Collection
              </Link>
              <button className="footer-link2 button-clean button">Blog</button>
              <button className="footer-link3 button-clean button">
                Q&amp;A
              </button>
            </div>
          </div>
          <div className="footer-list1">
            <h3 className="footer-heading2">{props.heading1}</h3>
            <div className="footer-items1">
              <Link to="/about" className="footer-link4 button-clean button">
                About
              </Link>
              <button className="footer-link5 button-clean button">
                {props.link6}
              </button>
            </div>
          </div>
        </div>
        <div className="footer-socials1">
          <a
            href={props.linkTwitter}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-twitter1 social button"
          >
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer-image1"
            />
          </a>
          <a
            href={props.linkDiscord}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-discord social button"
          >
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="footer-image2"
            />
          </a>
        </div>
      </div>
      <span className="footer-copyright">{props.copyright}</span>
    </footer>
  )
}

Footer.defaultProps = {
  logo: 'NotionPod.co',
  imageSrc1: '/Icons/discord.svg',
  imageAlt2: 'image',
  link2: 'Roadmap',
  linkDiscord: 'https://discord.com',
  linkTwitter1: 'https://twitter.com',
  linkTwitter: 'https://twitter.com',
  heading1: 'Company',
  copyright: '© 2024 NotionPod.co All Rights Reserved.',
  imageAlt1: 'image',
  link1: 'Collection',
  link3: 'Features',
  link6: 'Terms',
  link4: 'Team',
  caption: 'Do more on Notion.so with us',
  imageSrc: '/Icons/twitter.svg',
  heading: 'Site',
  link8: 'Licenses',
  imageSrc2: '/Icons/twitter.svg',
  link7: 'Limitations',
  link5: 'Press',
  link: 'About',
  imageAlt: 'image',
}

Footer.propTypes = {
  logo: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt2: PropTypes.string,
  link2: PropTypes.string,
  linkDiscord: PropTypes.string,
  linkTwitter1: PropTypes.string,
  linkTwitter: PropTypes.string,
  heading1: PropTypes.string,
  copyright: PropTypes.string,
  imageAlt1: PropTypes.string,
  link1: PropTypes.string,
  link3: PropTypes.string,
  link6: PropTypes.string,
  link4: PropTypes.string,
  caption: PropTypes.string,
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  link8: PropTypes.string,
  imageSrc2: PropTypes.string,
  link7: PropTypes.string,
  link5: PropTypes.string,
  link: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Footer
