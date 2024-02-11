import React from 'react'

import PropTypes from 'prop-types'

import './collections.css'

const Collections = (props) => {
  return (
    <section className={`collections-collection ${props.rootClassName} `}>
      <div className="collections-content">
        <span className="collections-caption">{props.caption}</span>
        <div className="collections-heading">
          <h2 className="collections-header">{props.header}</h2>
          <p className="collections-header1">{props.header1}</p>
        </div>
      </div>
      <div className="collections-main">
        <div className="collections-card">
          <div className="collections-image">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="collections-image01"
            />
          </div>
          <div className="collections-content1">
            <span className="collections-caption1">{props.caption1}</span>
            <h3 className="collections-title">{props.title}</h3>
          </div>
        </div>
        <div className="collections-card1">
          <div className="collections-image02">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="collections-image03"
            />
          </div>
          <div className="collections-content2">
            <span className="collections-caption2">{props.caption2}</span>
            <h3 className="collections-title1">{props.title1}</h3>
          </div>
        </div>
        <div className="collections-card2">
          <div className="collections-image04">
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="collections-image05"
            />
          </div>
          <div className="collections-content3">
            <span className="collections-caption3">{props.caption3}</span>
            <h3 className="collections-title2">{props.title2}</h3>
          </div>
        </div>
        <div className="collections-card3">
          <div className="collections-image06">
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="collections-image07"
            />
          </div>
          <div className="collections-content4">
            <span className="collections-caption4">
              <span>Character #4</span>
              <br></br>
            </span>
            <h3 className="collections-title3">{props.title3}</h3>
          </div>
        </div>
        <div className="collections-card4">
          <div className="collections-image08">
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="collections-image09"
            />
          </div>
          <div className="collections-content5">
            <span className="collections-caption5">{props.caption4}</span>
            <h3 className="collections-title4">{props.title4}</h3>
          </div>
        </div>
        <div className="collections-card5">
          <div className="collections-image10">
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="collections-image11"
            />
          </div>
          <div className="collections-content6">
            <span className="collections-caption6">{props.caption5}</span>
            <h3 className="collections-title5">{props.title5}</h3>
          </div>
        </div>
        <div className="collections-card6">
          <div className="collections-image12">
            <img
              alt={props.imageAlt6}
              src={props.imageSrc6}
              className="collections-image13"
            />
          </div>
          <div className="collections-content7">
            <span className="collections-caption7">{props.caption6}</span>
            <h3 className="collections-title6">{props.title6}</h3>
          </div>
        </div>
        <div className="collections-card7">
          <div className="collections-image14">
            <img
              alt={props.imageAlt7}
              src={props.imageSrc7}
              className="collections-image15"
            />
          </div>
          <div className="collections-content8">
            <span className="collections-caption8">{props.caption7}</span>
            <h3 className="collections-title7">{props.title7}</h3>
          </div>
        </div>
      </div>
      <button className="collections-view button-link button">
        {props.view}
      </button>
    </section>
  )
}

Collections.defaultProps = {
  imageSrc7: '/Characters/character-8.svg',
  imageAlt4: 'image',
  header: 'All time best collections',
  imageAlt3: 'image',
  imageAlt5: 'image',
  view: 'View all',
  imageAlt7: 'image',
  caption6: 'Character #7',
  title3: '0.05 ETH',
  imageSrc: '/Characters/character-1.svg',
  caption5: 'Character #6',
  imageSrc6: '/Characters/character-7.svg',
  imageAlt1: 'image',
  imageSrc5: '/Characters/character-6.svg',
  header1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  title6: '0.05 ETH',
  caption2: 'Character #2',
  rootClassName: '',
  title: '0.05 ETH',
  title2: '0.05 ETH',
  title1: '0.05 ETH',
  title7: '0.05 ETH',
  caption3: 'Character #3',
  imageSrc3: '/Characters/character-4.svg',
  caption4: 'Character #5',
  title5: '0.05 ETH',
  imageAlt2: 'image',
  caption7: 'Character #8',
  imageSrc4: '/Characters/character-5.svg',
  caption: 'collection',
  imageSrc2: '/Characters/character-3.svg',
  imageSrc1: '/Characters/character-2.svg',
  caption1: 'Character #1',
  title4: '0.05 ETH',
  imageAlt: 'image',
  imageAlt6: 'image',
}

Collections.propTypes = {
  imageSrc7: PropTypes.string,
  imageAlt4: PropTypes.string,
  header: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt5: PropTypes.string,
  view: PropTypes.string,
  imageAlt7: PropTypes.string,
  caption6: PropTypes.string,
  title3: PropTypes.string,
  imageSrc: PropTypes.string,
  caption5: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc5: PropTypes.string,
  header1: PropTypes.string,
  title6: PropTypes.string,
  caption2: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  title2: PropTypes.string,
  title1: PropTypes.string,
  title7: PropTypes.string,
  caption3: PropTypes.string,
  imageSrc3: PropTypes.string,
  caption4: PropTypes.string,
  title5: PropTypes.string,
  imageAlt2: PropTypes.string,
  caption7: PropTypes.string,
  imageSrc4: PropTypes.string,
  caption: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  caption1: PropTypes.string,
  title4: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt6: PropTypes.string,
}

export default Collections
