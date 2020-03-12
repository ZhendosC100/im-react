import React from 'react';

import './about.sass';

import facebookIcon from '../../assets/icon_social_facebook.svg';
import linkedInIcon from '../../assets/icon_social_linkedin.svg';
import twitterIcon from '../../assets/icon_social_twitter.svg';
import shareIcon from '../../assets/icon_social_share.png';


const About = () => {
    return(
        <section className="container about_container">

    
      <section className="links-mobile">

        <a href="#" className="icons">
          <img src={facebookIcon} alt="Facebook" title="Facebook"/>
        </a>

        <a href="#" className="icons">
          <img src={linkedInIcon} alt="LinkedIn" title="LinkedIn"/>
        </a>

        <a href="#" className="icons">
          <img src={twitterIcon} alt="Twitter" title="Twitter"/>
        </a>

        <a href="#" className="icons">
          <img src={shareIcon} alt="Share" title="Share"/>
        </a>
      </section>
      

    <div className="about__wrapper_text">

      <p className="about_text">JRPass is a UK-based company selling tickets for Japanese railway connections all around the world. You click, order, pay - and within a few days you have the ticket arriving at your doorstep. With JRPass you can travel all around Japan or within its specific regions with just one ticket.</p>
      

      <div className="about_challenge">
        <h3 className="about_challenge__title">Challenge:</h3>
        <p className="about_challenge__text">We took the project over from the previous team. The process of transferring the work was challenging in itself. The system had to be continuously developed, while the developers and process were changing. During the development, we also encountered several challenges connected to performance and business optimization.</p>
        <p>The main ones where:</p>
        

        <ul>
          <li>- integrating the project into our development framework</li>
          <li>- lack of Regional Passes offers</li>
          <li>- lack of website translations to various popular languages</li>
          <li>- old versions of the framework</li>
        </ul>
      </div>
      

    </div>
    

    <div className="about__wrapper_client">
      <span>Client</span>
      
      <h3 className="client_title">JRPasss</h3>
      
      <p className="client_country">Japan</p>
      
      <span className="work">Work duration</span>
      
      <h3 className="time">5 months</h3>
      
      <span className="scope">Scope</span>
      
      <a href="#">Ruby on Rails Development, UX/UI Design, Business Processes Optimising</a>
    </div>
    

  </section>
    )
};
export default About;