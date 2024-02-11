import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FAQ from '../components/faq'
import Footer from '../components/footer'
import './home1backup.css'

const Home1backup = (props) => {
  return (
    <div className="home1backup-container">
      <Helmet>
        <title>Home1backup - NotionPod.co</title>
        <meta property="og:title" content="Home1backup - NotionPod.co" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      <section className="home1backup-hero">
        <div className="home1backup-heading">
          <h1 className="home1backup-header">
            <span>Do more on </span>
            <br></br>
            <span>
              Notion.so
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>with us</span>
          </h1>
          <p className="home1backup-caption">
            Leveraging ≥ 10 years of tech experience and the power of Notion.so
            to streamline your business operations
          </p>
        </div>
        <div className="home1backup-buttons">
          <Link to="/collection" className="home1backup-view button">
            Browse our collection
          </Link>
          <a
            href="#landing-desc"
            className="home1backup-learn button-clean button"
          >
            Learn more
          </a>
        </div>
      </section>
      <section className="home1backup-description">
        <div className="home1backup-container1">
          <div id="landing-desc" className="home1backup-description1">
            <div className="home1backup-content">
              <p className="home1backup-paragraph">
                We are a small team of digital product experts who have been
                using Notion.so for our daily work and personal tasks since
                2019.
              </p>
              <p className="home1backup-paragraph1">
                <span>
                  Notion&apos;s versatility has empowered us to streamline
                  workflows, enhance productivity, and maintain effective
                  communication channels.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  From project management, OKRs tracking, monthly evaluation,
                  daily tasks, to personal note-taking, Notion.so has proven
                  invaluable in facilitating our team&apos;s success and
                  efficiency across various endeavors.
                </span>
              </p>
            </div>
            <Link to="/collection" className="home1backup-navlink">
              <div className="home1backup-links">
                <button className="home1backup-button button-link button">
                  <span>Browse our Notion collection</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home1backup-arrow"
                  />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="home1backup-cards">
        <div className="home1backup-row">
          <div className="home1backup-card">
            <div className="home1backup-avatar">
              <img
                alt="image"
                src="/Avatars/avatar.svg"
                className="home1backup-avatar1"
              />
            </div>
            <div className="home1backup-main">
              <div className="home1backup-content1">
                <h2 className="home1backup-header01">
                  30+ unique DBs and relations
                </h2>
                <p className="home1backup-description2">
                  With over 30 unique databases and interconnected relations, we
                  bring a wealth of experience to the table, ensuring that your
                  digital workspace is optimized for effective operations.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <Link to="/services" className="home1backup-learn1 button">
                <span className="home1backup-text09">See our services</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home1backup-image"
                />
              </Link>
            </div>
          </div>
          <div className="home1backup-card1">
            <div className="home1backup-avatar2">
              <img
                alt="image"
                src="/Avatars/default-avatar.svg"
                className="home1backup-avatar3"
              />
            </div>
            <div className="home1backup-main1">
              <div className="home1backup-content2">
                <h2 className="home1backup-header02">
                  ≥ 10 years of product dev experience
                </h2>
                <p className="home1backup-description3">
                  With over a decade of experience under our belt, we bring a
                  refined understanding of innovation and craftsmanship to every
                  project.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <Link to="/about" className="home1backup-learn2 button">
                <span className="home1backup-text10">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home1backup-image01"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="home1backup-card2">
          <div className="home1backup-row1">
            <div className="home1backup-main2">
              <div className="home1backup-content3">
                <h2 className="home1backup-header03">
                  Elevate your business ops with us
                </h2>
                <p className="home1backup-description4">
                  Unleash the full potential of Notion&apos;s versatile features
                  and customizable interface. From seamless collaboration to
                  streamlined business operations, empower yourself to achieve
                  more than ever before. Transform your workflow and unlock
                  limitless possibilities - supercharge your workspace on Notion
                  today.
                </p>
              </div>
              <button className="home1backup-learn3 button">
                <span className="home1backup-text11">Hire us</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home1backup-image02"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home1backup-project">
        <div className="home1backup-understand">
          <div className="home1backup-content4">
            <span className="home1backup-caption1">our approach</span>
            <div className="home1backup-heading1">
              <h2 className="home1backup-header04">All about simplified ops</h2>
              <p className="home1backup-header05">
                At our core, we prioritize refining information architecture to
                ensure effortless navigation and unparalleled efficiency.
                Whether it&apos;s project management, collaborative endeavors,
                or personal organization, we specialize in simplifying
                operations to empower you to achieve more with ease. With our
                focused approach and dedication to optimizing workflows, trust
                us to elevate your experience on Notion.so to new heights. Say
                goodbye to complexity and embrace the simplicity of seamless
                operations with us by your side
              </p>
            </div>
            <Link
              to="/collection"
              className="home1backup-view1 button-link button"
            >
              <span>Browse our collection</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home1backup-image03"
              />
            </Link>
          </div>
          <img
            alt="image"
            src="/group%202415.svg"
            className="home1backup-image04"
          />
        </div>
        <div className="home1backup-mining">
          <img
            alt="image"
            src="/group%202422.svg"
            className="home1backup-image05"
          />
          <div className="home1backup-content5">
            <span className="home1backup-caption2">Service</span>
            <div className="home1backup-heading2">
              <h2 className="home1backup-header06">How we assist you</h2>
              <p className="home1backup-header07">
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
            <button className="home1backup-view2 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home1backup-image06"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="home1backup-roadmap">
        <div className="home1backup-heading3">
          <h2 className="home1backup-header08">Roadmap</h2>
          <p className="home1backup-header09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="home1backup-list">
          <div className="home1backup-step">
            <span className="home1backup-caption3">01</span>
            <div className="home1backup-heading4">
              <h2 className="home1backup-header10">Project Launch</h2>
              <p className="home1backup-header11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="home1backup-button1 button">
              View on Opensea
            </button>
          </div>
          <div className="home1backup-step1">
            <span className="home1backup-caption4">02</span>
            <div className="home1backup-heading5">
              <h2 className="home1backup-header12">Metadata and Character</h2>
              <p className="home1backup-header13">
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
          <div className="home1backup-step2">
            <span className="home1backup-caption5">03</span>
            <div className="home1backup-heading6">
              <h2 className="home1backup-header14">Get Physical</h2>
              <p className="home1backup-header15">
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
          <div className="home1backup-step3">
            <span className="home1backup-caption6">04</span>
            <div className="home1backup-heading7">
              <h2 className="home1backup-header16">Private club community</h2>
              <p className="home1backup-header17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home1backup-benefits">
                <div className="home1backup-item">
                  <img
                    alt="image"
                    src="/Icons/people.svg"
                    className="home1backup-image07"
                  />
                  <p className="home1backup-header18">
                    Consectetur adipiscing elit
                  </p>
                </div>
                <div className="home1backup-item1">
                  <img
                    alt="image"
                    src="/Icons/paper.svg"
                    className="home1backup-image08"
                  />
                  <p className="home1backup-header19">
                    Consectetur adipiscing elit
                  </p>
                </div>
                <div className="home1backup-item2">
                  <img
                    alt="image"
                    src="/Icons/checklist.svg"
                    className="home1backup-image09"
                  />
                  <p className="home1backup-header20">
                    Consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home1backup-join-us">
        <div className="home1backup-content6">
          <div className="home1backup-main3">
            <div className="home1backup-heading8">
              <h2 className="home1backup-header21">
                Supercharge your workspace — Now!
              </h2>
              <p className="home1backup-caption7">
                A character custom collection is joining the NFT space on
                Opensea.
              </p>
            </div>
            <button className="home1backup-view3 button">
              View on Opensea
            </button>
          </div>
          <img
            alt="image"
            src="/group%202273.svg"
            className="home1backup-image10"
          />
        </div>
      </section>
      <FAQ></FAQ>
      <section className="home1backup-get-yours">
        <div className="home1backup-row2">
          <div className="home1backup-column">
            <div className="home1backup-card3">
              <img
                alt="image"
                src="/Characters/character-9.svg"
                className="home1backup-image11"
              />
            </div>
          </div>
          <div className="home1backup-column1">
            <div className="home1backup-card4">
              <img
                alt="image"
                src="/Characters/character-10.svg"
                className="home1backup-image12"
              />
            </div>
          </div>
        </div>
        <div className="home1backup-column2">
          <div className="home1backup-card5">
            <div className="home1backup-content7">
              <h2 className="home1backup-header22">Get yours now</h2>
              <p className="home1backup-description5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquat enim
                ad minim veniam.
              </p>
            </div>
            <button className="home1backup-button2 button">
              View on Opensea
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <div>
        <div className="home1backup-container3">
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

export default Home1backup
