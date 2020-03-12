import React from 'react';

import './comments.sass';

import symbolApostrophe1x from '../../assets/symbol_letter_apostrophe@1x.png';
import symbolApostrophe2x from '../../assets/symbol_letter_apostrophe@2x.png';
import avatarImg1x from '../../assets/client_avatar@1x.png';
import avatarImg2x from '../../assets/client_avatar@2x.png';
import linkedinIcon from '../../assets/icon_social_linkedin.svg';


const Comments = ( ) => {
    return(
        <section className="container comment_container">

            <img src={symbolApostrophe1x} srcSet={symbolApostrophe2x} alt="symbol letter apostrophe" className="apostrophe"/>
            <p className="comment__text">When you browse through videos at YouTube, which do you usually click first: one with around 10 views or one with around 75,000 views? If you’re normal, then you’re much more likely to click on YouTube</p>

            <div className="dev_wrap">

            <img src={avatarImg1x} srcSet={avatarImg2x} alt="avatar" className="avatar"/>

            <div className="dev__info_wrapper">
                <div className="dev__name_wrapper">
                <h3 className="dev__name">Daniel Warner</h3>
                
                <a href="#" className="dev__linkedin">
                    <img src={linkedinIcon} alt="icon linkedin"/>
                </a>
                
                </div>
                <p className="technology">Ruby developer at Ideamotive</p>
            </div>
     
            </div>
            
        </section>
    )
};
export default Comments;