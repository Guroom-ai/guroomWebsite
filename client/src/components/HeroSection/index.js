import React, {useState} from 'react'

import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Guroom</HeroH1>
                <HeroP>
                    Sign Up for a New Account Today!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signin"
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
