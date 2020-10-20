import React from 'react';
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import { 
    FaReact
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
                    <SkillsIcon src={html} />
                    <SkillsH2>HTML</SkillsH2>
                    <SkillsP>5 months basics experience</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <SkillsIcon src={css} />
                    <SkillsH2>CSS</SkillsH2>
                    <SkillsP>5 months basics experience(Bootstrap)</SkillsP>
                </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer >
    )
}

export default Skills
