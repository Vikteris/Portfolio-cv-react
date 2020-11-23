import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import book from '../../videos/Book.gif'
import {
    SkillsContainer,
    SkillsH1,
    SkillsWrapper,
    Item,
    ItemIcon,
    ItemH2,
    ItemButton,
    ItemP
} from './ProjectsElements';

const Projects = ({ItemBtn}) => {
    

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4}
    ];



    return (
        <>
            <SkillsContainer id="projects" >
                <SkillsH1>Projects</SkillsH1>
                <SkillsWrapper>
                <Carousel breakPoints={breakPoints}>
                    <Item >
                        <ItemIcon src={book} />
                        <ItemH2>Simple CRUD library system made with  PHP Laravel</ItemH2>
                        <ItemP>Email: vikter@inbox.lt</ItemP>
                        <ItemP>Password: viktoras</ItemP>
                        <ItemButton onClick={() => {window.open('https://librarybookss.herokuapp.com/', '_blank',); return true;}}>
                            {ItemBtn}
                        </ItemButton>
                    </Item>
                    <Item>2</Item>

                </Carousel>
                </SkillsWrapper>
            </SkillsContainer >   
        </>
    )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Projects />, rootElement);

export default Projects
