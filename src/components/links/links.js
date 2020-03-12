import React from 'react';

import './links.sass';

import facebookIcon from '../../assets/icon_social_facebook.svg';
import linkedInIcon from '../../assets/icon_social_linkedin.svg';
import twitterIcon from '../../assets/icon_social_twitter.svg';
import shareIcon from '../../assets/icon_social_share.png';

const Links = () => {
    return(
        <>
            <section className="container links-container">

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

            <div className="empty"></div>
        </>
    )
};
export default Links;