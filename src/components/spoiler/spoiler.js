import React from 'react';

import './spoiler.sass';

import symbolApostrophe1x from '../../assets/symbol_letter_apostrophe@1x.png';
import symbolApostrophe2x from '../../assets/symbol_letter_apostrophe@2x.png';
import symbolLetter1x from '../../assets/symbol_letter_S@1x.png';
import symbolLetter2x from '../../assets/symbol_letter_S@2x.png';



const Spoiler = () => {
    return(
        <section className="container spoiler_container">
            <img src={symbolApostrophe1x} srcSet={symbolApostrophe2x} alt="symbol letter apostrophe" className="apostrophe_mobile"/>
            <img src={symbolLetter1x} srcSet={symbolLetter2x} alt="symbol letter apostrophe" className="apostrophe"/>
            <h3 className="spoiler_title_mobile">Marrying web development and <br/> business <br/> processes <br/> support</h3>
            <h3 className="spoiler_title">Marrying web development and business processes support</h3>
            
            <p className="spoiler_question">How to optimize booking system for a Japanese railway network and increase sales?</p>
            
        </section>
    );
};
export default Spoiler;