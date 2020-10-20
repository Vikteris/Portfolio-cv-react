import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { 
    FaFacebook, 
    FaLinkedin,
    FaGithub
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterContent,
    FooterH1
} from '../../components/Footer/FooterElements';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterContent>
                    <FooterH1>You can find me:</FooterH1>
                </FooterContent>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/viktoras.jonutis" target="_blank" area-label= "Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com/Vikteris" target="_blank" area-label= "Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/viktoras-jonutis-8752331a7/" target="_blank" area-label= "Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Portfolio
                        </SocialLogo>
                        <WebsiteRights>Portfolio © {new Date().getFullYear()} All rights reserved </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
