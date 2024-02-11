import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
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
          <p className="home-caption">
            Leveraging ≥ 10 years of tech experience and the power of Notion.so
            to streamline your business operations
          </p>
        </div>
        <div className="home-buttons">
          <Link to="/collection" className="home-view button">
            Browse our collection
          </Link>
          <a href="#landing-desc" className="home-learn button-clean button">
            Learn more
          </a>
        </div>
      </section>
      <section className="home-description">
        <div className="home-container1">
          <div id="landing-desc" className="home-description1">
            <div className="home-content">
              <p className="home-paragraph">
                We are a small team of digital product experts who have been
                using Notion.so for our daily work and personal tasks since
                2019.
              </p>
              <p className="home-paragraph1">
                From project management, OKRs tracking, monthly evaluation,
                daily tasks, to personal note-taking, Notion.so has proven
                invaluable in facilitating our team&apos;s success and
                efficiency across various endeavors.
              </p>
            </div>
            <Link to="/collection" className="home-navlink">
              <div className="home-links">
                <button className="home-button button-link button">
                  <span>Browse our Notion collection</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-arrow"
                  />
                </button>
              </div>
            </Link>
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
                <h2 className="home-header01">30+ unique DBs and relations</h2>
                <p className="home-description2">
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
              <Link to="/services" className="home-learn1 button">
                <span className="home-text05">See our services</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image"
                />
              </Link>
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
                  ≥ 10 years of product dev experience
                </h2>
                <p className="home-description3">
                  With over a decade of product development experience under our
                  belt, we bring a refined understanding of innovation and
                  craftsmanship to every project.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <Link to="/about" className="home-learn2 button">
                <span className="home-text06">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image1"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="home-card2">
          <div className="home-row1">
            <div className="home-main2">
              <div className="home-content3">
                <h2 className="home-header03">
                  Elevate your business ops with us
                </h2>
                <p className="home-description4">
                  <span>
                    Unleash the full potential of Notion&apos;s versatile
                    features and customizable interface. From seamless
                    collaboration to streamlined business operations, empower
                    yourself to achieve more than ever before.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Transform your workflow and unlock limitless possibilities -
                    supercharge your workspace on Notion today.
                  </span>
                </p>
              </div>
              <button className="home-learn3 button">
                <span className="home-text11">Hire us</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image2"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-project">
        <div className="home-understand">
          <div className="home-content4">
            <span className="home-caption1">our approach</span>
            <div className="home-heading1">
              <h2 className="home-header04">All about simplified ops</h2>
              <p className="home-header05">
                <span>
                  At our core, we prioritize refining information architecture
                  to ensure effortless navigation and unparalleled efficiency.
                  Whether it&apos;s project management, collaborative endeavors,
                  or personal organization, we specialize in simplifying
                  operations to empower you to achieve more with ease.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  With our focused approach and dedication to optimizing
                  workflows, trust us to elevate your experience on Notion.so to
                  new heights. Say goodbye to complexity and embrace the
                  simplicity of seamless operations with us by your side
                </span>
              </p>
            </div>
            <Link to="/collection" className="home-view1 button-link button">
              <span>Browse our collection</span>
              <img alt="image" src="/Icons/arrow.svg" className="home-image3" />
            </Link>
          </div>
          <img alt="image" src="/group%202415.svg" className="home-image4" />
        </div>
        <div className="home-mining">
          <img alt="image" src="/group%202422.svg" className="home-image5" />
          <div className="home-content5">
            <span className="home-caption2">Service</span>
            <div className="home-heading2">
              <h2 className="home-header06">How we assist you</h2>
              <p className="home-header07">
                <span>
                  Experience streamlined business operations on your Notion
                  workspace with our simple, four-step approach:
                </span>
                <br></br>
                <br></br>
                <span>Assessment → Customization → Training → Support</span>
                <br></br>
              </p>
            </div>
            <a href="#4approach" className="home-view2 button-link button">
              <span>
                <span>Learn more</span>
                <br></br>
              </span>
              <img alt="image" src="/Icons/arrow.svg" className="home-image6" />
            </a>
          </div>
        </div>
      </section>
      <section className="home-roadmap">
        <div className="home-heading3">
          <h2 className="home-header08">Timeline of Engagement</h2>
          <p className="home-header09">
            <span>
              Experience the difference of expert assistance in unlocking the
              full potential of Notion. Let us be your partner in
              revolutionizing your workflow and achieving unparalleled
              productivity and more revenue.
            </span>
            <br></br>
          </p>
        </div>
        <div id="4approach" className="home-list">
          <div className="home-step">
            <span className="home-caption3">01</span>
            <div className="home-heading4">
              <h2 className="home-header10">Assessment</h2>
              <p className="home-header11">
                We start by understanding your current workflows and pain points
                to identify areas for improvement.
              </p>
            </div>
            <a
              href="https://calendly.com/notionpodco/30min"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link button"
            >
              Book an intro call
            </a>
          </div>
          <div className="home-step1">
            <span className="home-caption4">02</span>
            <div className="home-heading5">
              <h2 className="home-header12">Customization</h2>
              <p className="home-header13">
                <span>
                  Leveraging our expertise, we customize your Notion workspace
                  to align with your specific business needs and objectives.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption5">03</span>
            <div className="home-heading6">
              <h2 className="home-header14">Training</h2>
              <p className="home-header15">
                <span>
                  Through personalized training sessions, we empower you and
                  your team to effectively utilize Notion&apos;s features and
                  maximize productivity.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption6">04</span>
            <div className="home-heading7">
              <h2 className="home-header16">Support</h2>
              <p className="home-header17">
                Our commitment doesn&apos;t end with implementation. We provide
                ongoing support and guidance to ensure smooth integration and
                continued success.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content6">
          <div className="home-main3">
            <div className="home-heading8">
              <h2 className="home-header18">
                Supercharge your workspace — Now!
              </h2>
              <p className="home-caption7">
                Experience the epitome of streamlined operations with our
                expertise on Notion.so.
              </p>
            </div>
            <button className="home-view3 button">Hire us!</button>
          </div>
          <img alt="image" src="/group%202273.svg" className="home-image7" />
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
