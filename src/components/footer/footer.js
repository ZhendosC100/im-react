import React from 'react';

import './footer.sass';

import ruby from '../../assets/ruby.png';
import UiUx from '../../assets/ui_ux.png';
import itManagers from '../../assets/it_managers.png';

const Footer = () => {
    return(
        <footer>
            <div className="container footer_container">
                <p className="help">We helped <span>JRPass</span>  and dozens of other companies.</p>
                
                <p className="more">Learn more about our networks of top tech talents and learn, what we can do for you!</p>
                
                <div className="type_box">
                <div className="type">
                    <img src={ruby} alt="Ruby"/>
                    <p className="type_text">Ruby on Rails Developers</p>
                    
                </div>
                
                <div className="type">
                    <img src={UiUx} alt="UI/UX"/>
                    <p className="type_text">UX / UI Designers</p>
                    
                </div>
                
                <div className="type">
                    <img src={itManagers} alt="IT"/>
                    <p className="type_text">IT Project Managers</p>
                    
                </div>
                
                </div>
                

                <button>See all services</button>
            </div>
            
            
            <div className="hire_web_dev">
                <h3>Loking for web development experts?</h3>
                <p className="look_for">Get in touch with us and we'll provide you with the team of talents perfectly mathing your industry, technology and company culture.</p>
                
                <p className="hire_text">Hire Web Developers</p>
                
            </div>
            
        </footer>
    )
};
export default Footer;