import { useState } from 'react';
import { useRef } from 'react';
import { TikTokEmbed } from 'react-social-media-embed';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

function App () {
    const aboutMe = useRef(null);
    const experience = useRef(null);
    const passions = useRef(null);

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    };

    return (
      <div className = 'app'>

<nav className='navbar navbar-expand-lg navbar-light bg-white'>
    <div className='container-fluid'>
    <a className='navbar-brand' href='/portfolio'>
      <img
        src='JC.png'
        height='50'
        alt='JC Logo'
        loading='lazy'
      />
    </a>

    <button class='navbar-toggler'
    type='button'
    data-bs-toggle='collapse'
    data-bs-target='#n_bar'
    aria-controls='navbarNavAltMarkup'
    aria-expanded='false'
    aria-label='Toggle navigation'>
      <span class='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='n_bar'>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
          
          <li onClick={() => scrollToSection(aboutMe)} className='nav-item'>
            <a className='nav-link'>About Me</a>
          </li>
          <li onClick={() => scrollToSection(experience)} className='nav-item'>
            <a className='nav-link'>Experience</a>
          </li>
          <li onClick={() => scrollToSection(passions)} className='nav-item'>
            <a className='nav-link'>Passions</a>
          </li>
        </ul>
    </div>
    </div>
  </nav>


        <section className='heroSection'>

        <div id='hero' className='container-fluid' style={{backgroundImage: 'url(hero.png)'}}>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-xs-12 text-white'>
          <h1>Jacob Clover</h1>
          <h3>Front-End Web Developer</h3>
            </div>
            </div>
          </div>
          </section>

          <section ref={aboutMe} className='aboutMe'>
            <div className='container-fluid'>
            <div className='row d-flex justify-content-center'>
            <div className='col-xs-12'>
              <h2>About Me</h2>
             </div>
            </div>

              <div className='row d-flex justify-content-center'>
                <div id='aboutPara' className='col-xs-12 col-md-6'>
                  <p>My name is Jacob, and I am an entry-level web developer. My skillset includes HTML, CSS, JS, Bootstrap,
                    React.js, Java, Wordpress, and more! I am highly motivated, and an expeditious learner continuously seeking
                    to exceed expectations. I have a passion for solving complex problems, collborating in a team environment
                    and creating unique solutions. While my professional experience lies in mental health treatment, there are
                    many learned qualities that are applicable in web development. This includes leadership, meeting tight deadlines,
                    marketing, interdisciplinary collaboration, problem solving, web design, as well as frequent use of HTML, CSS, JS,
                    and PHP. I am excited to seek a new role in software development to further expand my horizons!
                  </p>
                </div>
                <div className='col-xs-12 col-md-6'>
                  <img className='headshot' src='headshot.png' />
                </div>
              </div>
            </div>
          </section>

          <section ref={experience} className='experience'>
            <div className='container-fluid'>
              <div className='row d-flex justify-content-center'>

                <div className='col-12'>
                <h2>My Experience</h2>
                </div>

              <div className='row d-flex justify-content-center'>
              <div className='col-xs-12 col-md-6'>
                  <img className='socalLogo' src='scmh.png' />
                </div>

                <div id='scmhCopy' className='col-xs-12 col-md-6'>
                <h4><i>Director of Admissions - SoCal Mental Health</i></h4>
                <h5>June 2021 - April 2023</h5>
                  <p>
                  As the director of admissions for SoCal Mental Health, I was tasked with creating admissions processes, 
                  overseeing the admissions team, overseeing the digital marketing teams, assisting in website maintenance
                  for our main website, socalmentalhealth.com, as well as handling direct maintenance for three other related 
                  company websites including epicjourneyinc.com, theepicjournal.com, and epicjourneyraising.com utilizing HTML, 
                  CSS, JS, and PHP. My role also included graphic design, collaboration amongst multiple departments, public 
                  speaking, complex problem solving, and financial / budgetary planning.
                  </p>

                  </div>
                </div>

                <div className='row d-flex justify-content-center'>
                <div className='col-xs-12 col-md-6'>
                  <img className='epicLogo' src='epic.png' />
                </div>

                <div id='scmhCopy' className='col-xs-12 col-md-6'>
                <h4><i>Chief Marketing Officer - Epic Journey</i></h4>
                <h5>March 2021 - April 2023</h5>
                  <p>My role as the Chief Marketing Officer for Epic Journey ran concurrently with my position at SoCal
                  Mental Health, as the CEOs were the same for both companies. As the CMO, I was tasked with handling
                  all of the digital marketing, as well as event planning / management for for-profit events and 
                  fundraisers benefiting non-profit companies hosted by Epic Journey. This includes two golf tournaments
                  benefiting the Red Songbird Foundation that featured a full 18 hole game of golf, a helicopter ball-drop 
                  Redbull skydivers flying onto the golf course, where we brought in approximately $15,000 in profits each
                  year.</p>

                  </div>
                </div>

                <div className='row d-flex justify-content-center'>
                <div className='col-xs-12 col-md-6'>
                  <img className='cbuLogo' src='cbu.png' />
                </div>

                <div id='scmhCopy' className='col-xs-12 col-md-6'>
                <h4><i>B.S. Healthcare Administration - In Progress</i></h4>
                <h5>Expected Completion 08/2023</h5>
                  <p>I have been completing my undergraduate degree in Healthcare Administration & Management since 10/2021,
                    and I am expecting to receive my bachelor's degree in August 2023. Some key topics studied throughout 
                    my degree path are accounting, health policy, management in healthcare, ethics, finance in healthcare,
                    pathophysiology, and more.
                  </p>

                  </div>
                </div>

              </div>
            </div>
          </section>

          <section ref={passions} className='passions'>
            <div className='container-fluid'>
              <div className='row d-flex justify-content-center'>
                <div id='passionsHeading' className='col-xs-12'>
                  <h2>My Passions</h2>
                </div>
              </div>

              <div className='row d-flex justify-content-center'>
                <div id='passionsCopy' className='col-xs-12 col-md-6'>
                  <p>Some of my passions include creating unique projects from code, working with computing hardware such as 
                     raspberry pi and arduino, gaming with friends, performing music whether it's with my band or at the church every weekend,
                     and skydiving. I got my skydiving license in October of 2020 and have 98 solo skydives to date! I 
                     also greatly enjoy spending time with my wife, being outdoors, and surfing in the SoCal sunshine. Thank you
                     for taking the time to read through my portfolio site, and please enjoy a clip of my band playing at a local
                     venue in LA, Harvard & Stone.
                  </p>
                </div>

                <div className='row d-flex justify-content-center'>
                <div className='col-xs-12 col-md-6'>
                <div id='tikTokEmbed' style={{ display: 'flex', justifyContent: 'center' }}>
                <TikTokEmbed url="https://www.tiktok.com/@plngr.band/video/7189333745550380330" width={325} />
                </div>
                </div>
                </div>
              </div>
            </div>
          </section>

          <section className='footer'>
            <footer className='footer-expand-lg footer-dark bg-black text-light'>
            <div id='footer' className='container-fluid'>
            <div className='row'>
            <div id='footerImg' className='col d-flex justify-content-center align-items-center'>
            <a className='footer-brand' href='/portfolio'>
              <img className='logo'
                src='JC.png'
                height='50'
                alt='JC Logo'
                loading='lazy'
              />
              </a>
            </div>
              <div id='footerImg' className='col d-flex justify-content-center align-items-center'>
              <a className='footer-linkedIn' href='https://www.linkedin.com/in/jake-clover-89a787211/' target='_blank'>
              <img className='logo'
                src='linkedin.png'
                height='60'
                alt='LinkedIn Logo'
                loading='lazy'
              />
              </a>
              </div>

              <div id='footerImg' className='col d-flex justify-content-center align-items-center'>
              <a className='footer-gitHub' href='https://github.com/jakec22' target='_blank'>
              <img className='logo'
                src='github.png'
                height='45'
                alt='GitHub Logo'
                loading='lazy'
              />
              </a>
              </div>

              </div>
              </div>
            </footer>
          </section>

      </div>

      
    );
          }


export default App
