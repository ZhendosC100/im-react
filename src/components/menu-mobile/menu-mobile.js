import React, {Component} from 'react';
import {Animated} from 'react-animated-css';
import './menu-mobile.sass';

import MenuLinkItems from '../menu-link-items/';

export default class MenuMobile extends Component {


    render(){
        const { showMenu, closeMenu } = this.props;
        
        return(
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={ showMenu }>
                <div className="menu_mobile">

                    <button 
                        className="close" 
                        title="close"
                        onClick={() => closeMenu()}
                    >X</button>

                    <MenuLinkItems/>
                </div>
            </Animated>
        )
    }
}