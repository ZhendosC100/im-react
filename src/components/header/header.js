import React, {Component} from 'react';
import MenuMobile from '../menu-mobile';
import MenuLinkItems from '../menu-link-items/';

import logoImg from '../../assets/logo_ideamotive.svg'
import './header.sass';

export default class Header extends Component {

    state = {
        showMenu: false
    }

    toggleShowMenu = () => {
        this.setState(({showMenu}) => ({showMenu: !showMenu}));
    }

    
    render(){

        const {showMenu} = this.state;

        return(
        
            <header className="header">
                {showMenu ? <MenuMobile showMenu={showMenu} closeMenu={this.toggleShowMenu}/> : null}
                <div className="container header_container">
        
                <img src={logoImg} alt="logo"/>
        
                    <div className="menu_box_mobile" onClick={() => this.toggleShowMenu()}></div>
        
                    <div className="menu_box_desctop">
                        <MenuLinkItems/>
                    </div>
                </div>
            </header>
          
          
            )
    }
};
