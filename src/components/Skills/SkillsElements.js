import styled from 'styled-components';


export const SkillsContainer = styled.div`
    height:800px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: #0c0c0c;

    @media screen and (max-width: 1000px){
        height: 1010px;

    };

    @media screen and (max-width: 768px){
        height: 1800px;

    };

    @media screen and (max-width:480px){
        height: 1700px;
    };


`

export const SkillsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    };

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 20px;
    };
    
`
export const SkillsCard = styled.div`
    background: #fff;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform:scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`
export const SkillsIcon= styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`
export const SkillsH1= styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    };
    @media screen and (max-width: 768px ){
        margin-top:40px;
    }
`
export const SkillsH2= styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;

`
export const SkillsP= styled.p`
    font-size: 1rem;
    text-align: center;
`