import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Collection from '../components/collection'
import FAQ from '../components/faq'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NotionPod.co</title>
        <meta property="og:title" content="NotionPod.co" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header">
            <span>
              Do more with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Your Notion</span>
          </h1>
          <p className="home-caption">
            Leveraging a decade of tech experience and the power of Notion.so to
            transform your business processes
          </p>
        </div>
        <div className="home-buttons">
          <button className="button">Browse our templates!</button>
          <button className="home-learn button-clean button">Learn more</button>
        </div>
      </section>
      <section className="home-description">
        <img
          alt="image"
          src="/hero-divider-1500w.png"
          className="home-divider-image"
        />
        <div className="home-container1">
          <div className="home-description1">
            <div className="home-content">
              <p className="home-paragraph">
                We are a team of digital aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat.
              </p>
              <p className="home-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="home-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="image"
                src="/Avatars/avatar.svg"
                className="home-avatar1"
              />
            </div>
            <div className="home-main">
              <div className="home-content1">
                <h2 className="home-header01">10,000+ unique characters</h2>
                <p className="home-description2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="home-learn1 button">
                <span className="home-text04">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image"
                />
              </button>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-avatar2">
              <img
                alt="image"
                src="/Avatars/default-avatar.svg"
                className="home-avatar3"
              />
            </div>
            <div className="home-main1">
              <div className="home-content2">
                <h2 className="home-header02">
                  Create yourself for the metaverse
                </h2>
                <p className="home-description3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="home-learn2 button">
                <span className="home-text05">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image01"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="home-card2">
          <div className="home-avatar4">
            <img
              alt="image"
              src="/Avatars/light-avatar.svg"
              className="home-avatar5"
            />
          </div>
          <div className="home-row1">
            <div className="home-main2">
              <div className="home-content3">
                <h2 className="home-header03">
                  Create yourself for the metaverse
                </h2>
                <p className="home-description4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="home-learn3 button">
                <span className="home-text06">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </button>
            </div>
            <img alt="image" src="/group%202262.svg" className="home-image03" />
          </div>
        </div>
      </section>
      <Collection></Collection>
      <section className="home-project">
        <div className="home-understand">
          <div className="home-content4">
            <span className="home-caption1">Project</span>
            <div className="home-heading1">
              <h2 className="home-header04">Understand the project</h2>
              <p className="home-header05">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="home-view1 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image04"
              />
            </button>
          </div>
          <img alt="image" src="/group%202415.svg" className="home-image05" />
        </div>
        <div className="home-mining">
          <img alt="image" src="/group%202422.svg" className="home-image06" />
          <div className="home-content5">
            <span className="home-caption2">Project</span>
            <div className="home-heading2">
              <h2 className="home-header06">How the minting works</h2>
              <p className="home-header07">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
                <br></br>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-view2 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image07"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="home-roadmap">
        <div className="home-heading3">
          <h2 className="home-header08">Roadmap</h2>
          <p className="home-header09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="home-list">
          <div className="home-step">
            <span className="home-caption3">01</span>
            <div className="home-heading4">
              <h2 className="home-header10">Project Launch</h2>
              <p className="home-header11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="home-button button">View on Opensea</button>
          </div>
          <div className="home-step1">
            <span className="home-caption4">02</span>
            <div className="home-heading5">
              <h2 className="home-header12">Metadata and Character</h2>
              <p className="home-header13">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption5">03</span>
            <div className="home-heading6">
              <h2 className="home-header14">Get Physical</h2>
              <p className="home-header15">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption6">04</span>
            <div className="home-heading7">
              <h2 className="home-header16">Private club community</h2>
              <p className="home-header17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-benefits">
                <div className="home-item">
                  <img
                    alt="image"
                    src="/Icons/people.svg"
                    className="home-image08"
                  />
                  <p className="home-header18">Consectetur adipiscing elit</p>
                </div>
                <div className="home-item1">
                  <img
                    alt="image"
                    src="/Icons/paper.svg"
                    className="home-image09"
                  />
                  <p className="home-header19">Consectetur adipiscing elit</p>
                </div>
                <div className="home-item2">
                  <img
                    alt="image"
                    src="/Icons/checklist.svg"
                    className="home-image10"
                  />
                  <p className="home-header20">Consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content6">
          <div className="home-main3">
            <div className="home-heading8">
              <h2 className="home-header21">Create your character now</h2>
              <p className="home-caption7">
                A character custom collection is joining the NFT space on
                Opensea.
              </p>
            </div>
            <button className="home-view3 button">View on Opensea</button>
          </div>
          <img alt="image" src="/group%202273.svg" className="home-image11" />
        </div>
      </section>
      <FAQ></FAQ>
      <section className="home-get-yours">
        <div className="home-row2">
          <div className="home-column">
            <div className="home-card3">
              <img
                alt="image"
                src="/Characters/character-9.svg"
                className="home-image12"
              />
            </div>
          </div>
          <div className="home-column1">
            <div className="home-card4">
              <img
                alt="image"
                src="/Characters/character-10.svg"
                className="home-image13"
              />
            </div>
          </div>
        </div>
        <div className="home-column2">
          <div className="home-card5">
            <div className="home-content7">
              <h2 className="home-header22">Get yours now</h2>
              <p className="home-description5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquat enim
                ad minim veniam.
              </p>
            </div>
            <button className="home-button1 button">View on Opensea</button>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
