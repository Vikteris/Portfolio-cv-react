import React from 'react';
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import java from '../../images/java.png'
import php from '../../images/php.png'

import { 
    FaLaravel,
    FaReact,
} from 'react-icons/fa';
import {
    SkillsContainer,
    SkillsH1,
    SkillsWrapper,
    SkillsCard,
    SkillsIcon,
    SkillsH2,
    SkillsP
} from './SkillsElements';

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsH1>Skills</SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <SkillsIcon src={html} />
                    <SkillsH2>HTML</SkillsH2>
                    <SkillsP>5 months basics experience</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={css} />
                    <SkillsH2>CSS</SkillsH2>
                    <SkillsP>5 months basics experience(Bootstrap)</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={js} />
                    <SkillsH2>JS</SkillsH2>
                    <SkillsP>1 month basics. <FaReact color='#61DAFB' size='15px'/> ReactJS basics</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={java} />
                    <SkillsH2>JAVA</SkillsH2>
                    <SkillsP>1 months basic experience.OOP knowledge</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon 
                        src={php} 
                        style={{width:"200px",
                                height: "130px"}} />
                    <SkillsH2>PHP</SkillsH2>
                    <SkillsP>3 months basics experience. Experience with Laravel <FaLaravel color='#FF1500' size='15px'/>, MySql</SkillsP>
                </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer >
    )
}

export default Skills
