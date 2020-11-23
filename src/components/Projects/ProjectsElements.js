import styled from 'styled-components';



export const SkillsContainer = styled.div`
    height: 980px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: #292929;

    @media screen and (max-width: 1000px){
        height: 850px;
    };
    @media screen and (max-width: 768px){
        height: 700px;
    };
    @media screen and (max-width: 464px){
        height: 700px;
    };
    @media screen and (max-width:375px){
        height: 600px;
    }; 
`
export const SkillsH1= styled.h1`
    font-size: 2.5rem;
    color: #fff;

    @media screen and (max-width: 1000px){
        margin-top:70px;
        font-size: 2rem;
    };
    @media screen and (max-width: 768px){
        margin-top: 70px;
        font-size: 2.2rem;
    };
    @media screen and (max-width: 464px){
        font-size: 2rem;
    };
    @media screen and (max-width: 375px){
        font-size: 1.6rem;
        margin-top:20px;
    };
`

export const SkillsWrapper = styled.div`
    width: 100%;
    height:900px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0;
    font-family: sans-serif;
    justify-content: center;

    @media screen and (max-width: 1000px){
        height: 800px;
    };
    @media screen and (max-width: 768px){
        height: 600px;
    };
    @media screen and (max-width:375px){
        height: 500px;
    };


    button.rec-dot{
        box-shadow: 0 0 1px 3px  #01bf71;
        
    }
    .fuVLpM {
        background-color: #BFBCBC;
    }
    button.rec-arrow {
        background-color: #717070;
        margin-left: 20px;
        margin-right: 20px;

    }
    button.rec-arrow:hover, button.rec-arrow:active, button.rec-arrow:focus  {
        background-color:#01bf71;
        background: #01bf71;
        cursor: pointer;
        box-shadow: 0 0 11px white;
    }
`
export const Item = styled.div`
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    height: 600px;
    width: 500px;
    background-color: #eaede8;
    color: #fff;
    margin: 15px;
    font-size: 4em;
    outline: none;
    transition: 0.3s ease-in-out;

    
    &:hover{
        transform:scale(1.02);
        transition: 0.3s ease-in-out;
        box-shadow: 0 0 11px white;
    }
    @media screen and (max-width: 800px){
        &:hover{
            transform: none;
            transition: none;
            box-shadow: none;
        }
    };
    @media screen and (max-width: 1000px){
        height: 450px;
    };
    @media screen and (max-width: 768px){
        height: 400px;
    };
    @media screen and (max-width: 749px){
        width: 350px;
    };
    @media screen and (max-width: 375px){
        height: 300px;
    };
`
export const ItemIcon= styled.img`
    position: relative;
    height: 400px;
    width: 100%;
    
    @media screen and (max-width: 1000px){
        height: 300px;
    };
    @media screen and (max-width: 768px){
        height: 250px;
    };
    @media screen and (max-width: 464px){
        height: 200px;
    };
    @media screen and (max-width: 375px){
        height:160px;
    };
`;

export const ItemH2= styled.h2`
    position:absolute;
    width: 50%;
    font-size: 20px;
    top:50px;
    text-align: center;
    text-align: ju;
    margin-bottom: 10px;
    
    &:hover{
        text-transform: none;
    };
    @media screen and (max-width: 1000px){
        font-size: 20px;
    };
    @media screen and (max-width: 790px){
        font-size: 15px;
    };
    @media screen and (max-width: 768px){
        font-size: 15px;
    };
    @media screen and (max-width: 375px){
        font-size: 9px;
    };
`;
export const ItemP= styled.p`
    width: 70%;
    font-size: 19px;
    text-align: justify;
    align-items: center;
    text-align: center;
    margin-top: 25px;
    color: #000;
    border: none;
    border-bottom: 2px solid #cccc;

    @media screen and (max-width: 1000px){
        font-size: 17px;
    };
    @media screen and (max-width: 790px){
        font-size: 15px;
    };
    @media screen and (max-width: 768px){
        font-size: 15px;
    };
    @media screen and (max-width: 375px){
        font-size: 10px;
    };
`

export const Btn = {
    ItemBtn: 'Watch',
};

export const ItemButton= styled.button`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    display:inline-block;
    border:0.16em solid #01bf71;
    box-sizing: border-box;
    text-decoration:none;
    font-weight:400;
    color:#01bf71;
    text-align:center;
    transition: all 0.15s;

    &:hover{
    color:#DDDDDD;
    background-color:#01bf71;
    border-color:#DDDDDD;
    };

    &:active{
        color:#BBBBBB;
        border-color:#BBBBBB;
    }
    @media all and (max-width:30em){
        display:block;
    }
`

