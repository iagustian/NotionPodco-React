import React from 'react'

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
              <button className="footer-link button-clean button">
                {props.link}
              </button>
              <button className="footer-link1 button-clean button">
                {props.link1}
              </button>
              <button className="footer-link2 button-clean button">
                {props.link2}
              </button>
              <button className="footer-link3 button-clean button">
                {props.link3}
              </button>
            </div>
          </div>
          <div className="footer-list1">
            <h3 className="footer-heading2">{props.heading1}</h3>
            <div className="footer-items1">
              <button className="footer-link4 button-clean button">
                {props.link4}
              </button>
              <button className="footer-link5 button-clean button">
                {props.link5}
              </button>
              <button className="footer-link6 button-clean button">
                {props.link6}
              </button>
              <button className="footer-link7 button-clean button">
                {props.link7}
              </button>
              <button className="footer-link8 button-clean button">
                {props.link8}
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
  copyright: '© 2024 NotionPod.co All Rights Reserved.',
  linkTwitter: 'https://twitter.com',
  linkDiscord: 'https://discord.com',
  logo: 'NotionPod.co',
  caption: 'Do more with Notion.so',
  linkTwitter1: 'https://twitter.com',
  linkDiscord1: 'https://discord.com',
  heading: 'Site',
  heading1: 'Company',
  imageSrc: '/Icons/twitter.svg',
  imageAlt: 'image',
  imageSrc1: '/Icons/discord.svg',
  imageAlt1: 'image',
  imageSrc2: '/Icons/twitter.svg',
  imageAlt2: 'image',
  imageSrc3: 'c0e4ac5c-39a4-4c07-9115-3b6ad693a75a',
  imageAlt3: 'image',
  link: 'About',
  link1: 'Collection',
  link2: 'Roadmap',
  link3: 'Features',
  link4: 'Team',
  link5: 'Press',
  link6: 'Terms',
  link7: 'Limitations',
  link8: 'Licenses',
}

Footer.propTypes = {
  copyright: PropTypes.string,
  linkTwitter: PropTypes.string,
  linkDiscord: PropTypes.string,
  logo: PropTypes.string,
  caption: PropTypes.string,
  linkTwitter1: PropTypes.string,
  linkDiscord1: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  link: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  link6: PropTypes.string,
  link7: PropTypes.string,
  link8: PropTypes.string,
}

export default Footer
