import React from "react";
import "./App.css";
import csImage from "./images/cs.png";
import logoImage from "./images/Amaze-23.png";
import mulearnImage from "./images/mulearn.png";
import sbImage from "./images/sb.png";
import instaImage from "./images/insta-icon.png";
import productImage from "./images/services/icon-product-design.svg";
import researchImage from "./images/services/icon-research.svg";
import ecommerceImage from "./images/services/icon-ecommerce.svg";
import frontendImage from "./images/services/icon-frontend.svg";
import replitImage from "./images/Replit-Dark-Background.png";
import devfolioImage from "./images/Devfolio_Logo-White.png";
import polygonImage from "./images/Polygon_Logo-White.png";

function App() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="app" id="home">
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src={logoImage} alt="Logo" />
          </div>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#tracks">Tracks</a>
          </li>
          <li>
            <a href="#guidelines">Guidlines</a>
          </li>
        </ul>

        <div className="rightNav">
          <button className="btn-sm">Register Now</button>
        </div>
      </nav>

      <div className="intro-wrap">
        <section>
          <h1 className="s-intro__text">
            Are you a problem solver? <br />
            Are you curious enough? <br />
            Are you multi-skilled? <br />
          </h1>
        </section>
        <div className="intro">
          <h2 className="s-intro__about-title">Hello, Welcome to Amaze '23</h2>

          <p>
            <strong>
              <em>
                Programming is a skill best aquired by practice & example rather
                than from books✨
              </em>
            </strong>
            <br />
            ~ Alan Turing
            <br />
            <br />
            <strong>IEEE CS SBC GCEK</strong> in collaboration with
            <strong> Mulearn GCEK</strong> presents a 24 hr hackathon,
            <strong>Amaze '23</strong>🏮✨
            <br />
            A chance to exhibit your skills, have fun, and compete to come out
            victorious! Amaze '23 has an alluring prize pool of ₹15,000✨
            <br />
            <br />
            📅Date : <strong>October 28 - 29</strong>
            <br />
            ⏰Venue :<strong>GCEK, Kannur</strong>
            <br />
            <br />
            So don't miss out on this one...
            <br />
            Have a look at our <strong>GUIDELINES💫</strong> <br />
            🔖Submit your abstract on or before
            <strong> October 27, 11:59 pm</strong>
          </p>

          <div className="clients__content">
            <img
              className="icons"
              src={sbImage}
              alt="IEEE SB GCEK"
              id="sb-image"
            />
            <img className="icons" src={mulearnImage} alt="Mulearn GCEK" />
            <img className="icons" src={csImage} alt="IEEE CS SBC GCEK" />
          </div>
        </div>
      </div>

      <section className="section">
        <div className="details_summary" data-animate-block>
          <div className="stats_item" data-animate-el>
            <div className="stats_count" data-counter="15">
              <span>15</span>K+
            </div>
            <h5>Prizes</h5>
          </div>
          <div className="stats_item" data-animate-el>
            <div className="stats_count" data-counter="10">
              <span>10</span>
            </div>
            <h5>Teams</h5>
          </div>
          <div className="stats_item" data-animate-el>
            <div className="stats_count" data-counter="40">
              <span>40</span>
            </div>
            <h5>Participants</h5>
          </div>
          <div className="stats_item" data-animate-el>
            <div className="stats_count" data-counter="24">
              <span>24</span>
            </div>
            <h5>Hours</h5>
          </div>
        </div>
      </section>

      <section id="tracks" className="s-services target-section">
        <div className="row section-header has-bottom-sep">
          <div className="track-header">
            <h3 className="text-pretitle">TRACKS</h3>
            <h1 className="text-display-title">
              Choose your track <br />
              and start cracking <br />
            </h1>
          </div>
        </div>

        <div className="services" data-animate-block>
          <div className="service-item" data-animate-el>
            <div className="service-icon-block">
              <span className="service-icon">
                <img
                  className="service-image"
                  src={productImage}
                  alt="productImage"
                />
              </span>
            </div>
            <div className="service-text">
              <h3 className="h4">Accessibility and inclusion</h3>
              <p>
                Accessibility and Inclusion is an important aspect for the
                wellbeing of a society. Physical and mental abilities vary based
                on various factors like age, gender, disabilities and
                differently ableness. However, most of the services, utility or
                leisure avenues are built without this sensitivity.
              </p>
            </div>
          </div>

          <div className="service-item" data-animate-el>
            <div className="service-icon-block">
              <span className="service-icon">
                <img
                  className="service-image"
                  src={frontendImage}
                  alt="frontendImage"
                />
              </span>
            </div>
            <div className="service-text">
              <h3 className="h4">Good health and well-being</h3>
              <p>
                Ensuring healthy lives & promoting well being at all ages is
                essential to sustainable development. In today's world, health
                care is facing new & unprecedented challenges. Technology can
                play a significant role when it comes to assisting health care
                professionals and their parents.
              </p>
            </div>
          </div>

          <div className="service-item" data-animate-el>
            <div className="service-icon-block">
              <span className="service-icon">
                <img
                  className="service-image"
                  src={researchImage}
                  alt="researchImage"
                />
              </span>
            </div>
            <div className="service-text">
              <h3 className="h4">Quality education</h3>
              <p>
                Technology is a powerful tool that enhances the quality of
                education in so many ways. Quality education, which is essential
                to real learning and human development, is influenced by factors
                both inside and outside the classroom. Improvements in the
                quality of teaching can reduce dropout rates and ensure better
                retention and transitions from early childhood learning into
                primary and secondary education.
              </p>
            </div>
          </div>

          <div className="service-item" data-animate-el>
            <div className="service-icon-block">
              <span className="service-icon">
                <img
                  className="service-image"
                  src={ecommerceImage}
                  alt="ecommerceImage"
                />
              </span>
            </div>
            <div className="service-text">
              <h3 className="h4">Agriculture and rural development</h3>
              <p>
                Science and Technology can develop in rural communities a
                learning and innovation capacity that increases the
                effectiveness of their efforts to solve problems and improve
                their lives. However, technological applications are largely
                restricted to urban areas. Rural areas have not reaped enough
                benefits from them.
              </p>
            </div>
          </div>
        </div>

        <p className="track-para">
          Identify the existing challenges in the given domains which can be
          solved out by technology
        </p>
      </section>

      <section id="guidelines" className="s-contact target-section">
        <div className="row section-header section-header--dark">
          <div className="column lg-12">
            <h3 className="guideline-pretitle">Guidelines</h3>
            <h1 className="text-display-title">How to apply?</h1>
          </div>

          <div>
            <ul className="guidlines-list">
              <li>
                The maximum number of participants in each team cannot exceed 4.
              </li>
              <li>
                Round one is abstract submission, in which the teams can select
                any one of the topics given below before 22-10-2023:
              </li>
              <ul>
                <li>Accessibility and inclusion</li>
                <li>Good health and well-being</li>
                <li>Quality education</li>
                <li>Agriculture and rural development</li>
              </ul>
              <li>
                The teams selected for round two must report for the offline
                hackathon at Government College of Engineering Kannur before
                09:00 am, 28-10-2023.
              </li>
              <li>Round two will last until next day evening(before 6pm)</li>
              <li>
                All work on a project should be done during the hackathon.
              </li>
              <li>Participants must bring their college ID card.</li>
              <li>
                Teams can be disqualified from the competition at the
                organizer's discretion. Reasons might include but are not
                limited to breaking the Competition Rules or unsporting
                behaviour.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="register">
        <div className="register-sub">
          <div className="row section-header section-header--dark">
            <div className="">
              <h3 className="register-pretitle">REGISTER</h3>
              <h1 className="text-display-title">
                Do you have an idea or an epic project in mind?
              </h1>
            </div>
          </div>

          <div className="row row-x-center text-center s-contact__content">
            <div className="column lg-12">
              <p className="lead">
                Submit your abstract here using given{" "}
                <a
                  href="https://docs.google.com/document/d/1WG35M9bJKOdLgy0_rMWIA9RrIgNgIO8ZGILjHqU_e5U/edit?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  format
                </a>
              </p>
              <div>
                {/* <a
                  className="dev-button-a"
                  href="https://apply.devfolio.co/v2/sdk.js"
                >
                  <div className="dev-button">
                    <button id="devfolio-apply-now">
                      <svg
                        className="dev-logo"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        viewBox="0 0 115.46 123.46"
                      >
                        <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" />
                        <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" />
                      </svg>
                      Apply with Devfolio
                    </button>
                  </div>
                </a> */}
                <div
                  className="apply-button"
                  data-hackathon-slug="amaze-3"
                  data-button-theme="light"
                ></div>
              </div>
              *use given abstract format
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors">
        <div>
          <h1 className="h1">Our Sponsors</h1>
        </div>
        <div className="sponsor-logos">
          <a href="https://devfolio.co/projects/polygon-4d64">
            <div className="s-container">
              <div className="sponsor-icon-block">
                <span className="s-logo-icon">
                  <img
                    id="polygon-image"
                    className="icons-sponsor"
                    src={polygonImage}
                    alt="POLYGON LOGO"
                  />
                </span>
              </div>
            </div>
          </a>

          <a href="https://devfolio.co/">
            <div className="s-container">
              <div className="sponsor-icon-block">
                <span className="s-logo-icon">
                  <img
                    id="devfolio-image"
                    className="icons-sponsor"
                    src={devfolioImage}
                    alt="DEVFOLIO LOGO"
                  />
                </span>
              </div>
            </div>
          </a>

          <a href="https://replit.com/">
            <div className="s-container">
              <div className="sponsor-icon-block">
                <span className="s-logo-icon">
                  <img
                    id="replit-image"
                    className="icons-sponsor"
                    src={replitImage}
                    alt="REPLIT LOGO"
                  />
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <footer className="s-footer">
        <div className="contact-all">
          <div className="contact-el">
            <h4 className="h6">Organizers</h4>

            <a href="https:/ieeesbgcek.org">
              <img
                id="sb-image"
                className="icons-contact"
                src={sbImage}
                alt="IEEE SB GCEK"
              />
            </a>

            <a href="https://www.linkedin.com/in/mulearn-gcek/">
              <img
                className="icons-contact"
                src={mulearnImage}
                alt="Mulearn GCEK"
              />
            </a>
            <a href="https:/ieeesbgcek.org">
              <img
                className="icons-contact"
                src={csImage}
                alt="IEEE CS SBC GCEK"
              />
            </a>
          </div>

          <div className="contact-el">
            <h4 className="h6">Follow Us</h4>

            <ul className="contact-list">
              <li>
                <a href="https://www.instagram.com/ieeesbgcek/">
                  <img
                    className="insta-logo"
                    src={instaImage}
                    alt="Instagram-logo"
                  />
                  ieeesbgcek
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mulearn_gcek/">
                  <img
                    className="insta-logo"
                    src={instaImage}
                    alt="Instagram-logo"
                  />
                  mulearn_gcek
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-el">
            <h4 className="h6">Contact Us</h4>

            <ul className="contact-list">
              <li>
                <a href="mailto:ieeesb@gcek.ac.in">ieeesb@gcek.ac.in</a>
              </li>
              <li>
                <a href="tel:920-704-5811">+919207045811</a>
              </li>
              <li>
                <a href="tel:999-517-4109">+919995174109</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
