import React from 'react'

import PropTypes from 'prop-types'

import './collection.css'

const Collection = (props) => {
  return (
    <section className={`collection-collection ${props.rootClassName} `}>
      <div className="collection-content">
        <span className="collection-caption">{props.caption}</span>
        <div className="collection-heading">
          <h2 className="collection-header">{props.header}</h2>
          <p className="collection-header1">{props.header1}</p>
        </div>
      </div>
      <div className="collection-main">
        <div className="collection-card">
          <div className="collection-image">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="collection-image01"
            />
          </div>
          <div className="collection-content1">
            <span className="collection-caption1">{props.caption1}</span>
            <h3 className="collection-title">{props.title}</h3>
          </div>
        </div>
        <div className="collection-card1">
          <div className="collection-image02">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="collection-image03"
            />
          </div>
          <div className="collection-content2">
            <span className="collection-caption2">{props.caption2}</span>
            <h3 className="collection-title1">{props.title1}</h3>
          </div>
        </div>
        <div className="collection-card2">
          <div className="collection-image04">
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="collection-image05"
            />
          </div>
          <div className="collection-content3">
            <span className="collection-caption3">{props.caption3}</span>
            <h3 className="collection-title2">{props.title2}</h3>
          </div>
        </div>
        <div className="collection-card3">
          <div className="collection-image06">
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="collection-image07"
            />
          </div>
          <div className="collection-content4">
            <span className="collection-caption4">
              <span>Character #4</span>
              <br></br>
            </span>
            <h3 className="collection-title3">{props.title3}</h3>
          </div>
        </div>
        <div className="collection-card4">
          <div className="collection-image08">
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="collection-image09"
            />
          </div>
          <div className="collection-content5">
            <span className="collection-caption5">{props.caption4}</span>
            <h3 className="collection-title4">{props.title4}</h3>
          </div>
        </div>
        <div className="collection-card5">
          <div className="collection-image10">
            <img
              alt={props.imageAlt5}
              src={props.imageSrc5}
              className="collection-image11"
            />
          </div>
          <div className="collection-content6">
            <span className="collection-caption6">{props.caption5}</span>
            <h3 className="collection-title5">{props.title5}</h3>
          </div>
        </div>
        <div className="collection-card6">
          <div className="collection-image12">
            <img
              alt={props.imageAlt6}
              src={props.imageSrc6}
              className="collection-image13"
            />
          </div>
          <div className="collection-content7">
            <span className="collection-caption7">{props.caption6}</span>
            <h3 className="collection-title6">{props.title6}</h3>
          </div>
        </div>
        <div className="collection-card7">
          <div className="collection-image14">
            <img
              alt={props.imageAlt7}
              src={props.imageSrc7}
              className="collection-image15"
            />
          </div>
          <div className="collection-content8">
            <span className="collection-caption8">{props.caption7}</span>
            <h3 className="collection-title7">{props.title7}</h3>
          </div>
        </div>
      </div>
      <button className="collection-view button-link button">
        {props.view}
      </button>
    </section>
  )
}

Collection.defaultProps = {
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

Collection.propTypes = {
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

export default Collection
