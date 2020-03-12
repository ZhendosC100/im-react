import React from 'react';

import './cover.sass';
import coverMob1x from '../../assets/cover_photo_desktop@1x.jpg';
import coverMob2x from '../../assets/cover_photo_mobile@2x.jpg';

import coverDesc1x from '../../assets/cover_photo_desktop@1x.jpg';
import coverDesc2x from '../../assets/cover_photo_desktop@2x.jpg';


const Cover = () => {
    return (
        <div className="container cover_box__container">
            <img className="mobile" src={coverMob1x} srcSet={coverMob2x} alt="cover_photo"/>
            <img src={coverDesc1x} srcSet={coverDesc2x} alt="cover photo_desktop" className="desktop"/>
        </div>
    )
};
export default Cover;