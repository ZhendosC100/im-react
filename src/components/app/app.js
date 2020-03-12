import React, {Component} from 'react';

import Header from '../header';
import Cover from '../cover';
import Spoiler from '../spoiler';
import About from '../about';
import Comments from '../comments';
import Links from '../links';
import Footer from '../footer';
import SliderBox from '../slider';

export default class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Cover/>
                <Spoiler/>
                <About/>
                <SliderBox/>
                <Comments/>
                <Links/>
                <Footer/>
            </div>
        )
    }
}