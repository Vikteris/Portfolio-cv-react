import React, {/* useState */} from 'react';
// import { Button } from 'react-scroll';
import Video from '../../videos/video.mp4';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP
} from './HeroElements'

const HeroSection = () => {


    return (
        <HeroContainer id = 'home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type ='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>I am Viktoras Jonutis</HeroH1>
                <HeroP>Developer</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
