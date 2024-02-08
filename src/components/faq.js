import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <section className="faq-faq">
      <h2 className="faq-header">{props.header}</h2>
      <div className="faq-accordion">
        <div data-role="accordion-container" className="faq-element accordion">
          <div className="faq-content">
            <span className="faq-header1">{props.header1}</span>
            <span data-role="accordion-content" className="faq-description">
              {props.description}
            </span>
          </div>
          <div className="faq-icon-container">
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-closed"
              className="faq-icon"
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-open"
              className="faq-icon02"
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
        <div data-role="accordion-container" className="faq-element1 accordion">
          <div className="faq-content1">
            <span className="faq-header2">{props.header2}</span>
            <span data-role="accordion-content" className="faq-description1">
              {props.description1}
            </span>
          </div>
          <div className="faq-icon-container1">
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-closed"
              className="faq-icon04"
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-open"
              className="faq-icon06"
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
        <div data-role="accordion-container" className="faq-element2 accordion">
          <div className="faq-content2">
            <span className="faq-header3">{props.header3}</span>
            <span data-role="accordion-content" className="faq-description2">
              {props.description2}
            </span>
          </div>
          <div className="faq-icon-container2">
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-closed"
              className="faq-icon08"
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-open"
              className="faq-icon10"
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
        <div data-role="accordion-container" className="faq-element3 accordion">
          <div className="faq-content3">
            <span className="faq-header4">{props.header4}</span>
            <span data-role="accordion-content" className="faq-description3">
              {props.description3}
            </span>
          </div>
          <div className="faq-icon-container3">
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-closed"
              className="faq-icon12"
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-open"
              className="faq-icon14"
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
        <div data-role="accordion-container" className="faq-element4 accordion">
          <div className="faq-content4">
            <span className="faq-header5">{props.header5}</span>
            <span data-role="accordion-content" className="faq-description4">
              {props.description4}
            </span>
          </div>
          <div className="faq-icon-container4">
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-closed"
              className="faq-icon16"
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-open"
              className="faq-icon18"
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

FAQ.defaultProps = {
  description1:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
  header3: 'Tempor incididunt ut labore et dolore magna aliquat enim ad minim?',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
  header4: 'Lorem ipsum dolor sit ametetur elit?',
  description3:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
  header2:
    'Excepteur sint occaecat cupidatat non sunt in culpa qui officia deserunt mollit anim id est laborum?',
  description2:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
  header1: 'Lorem ipsum dolor sit ametetur elit?',
  description4:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
  header5: 'Incididunt ut labore et dolore?',
  header: 'We have all the answers',
}

FAQ.propTypes = {
  description1: PropTypes.string,
  header3: PropTypes.string,
  description: PropTypes.string,
  header4: PropTypes.string,
  description3: PropTypes.string,
  header2: PropTypes.string,
  description2: PropTypes.string,
  header1: PropTypes.string,
  description4: PropTypes.string,
  header5: PropTypes.string,
  header: PropTypes.string,
}

export default FAQ
