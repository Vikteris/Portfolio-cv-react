import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
`

export const H1 = styled.h1`
    margin-bottom: 30px;
    text-align: center;
`
export const Label = styled.label`
    padding-bottom: 10px;
    color: rgb(0, 0, 32);
    font-weight: bold;
`
export const Input = styled.input`
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137);
    margin-bottom: 20px;
    border: 2px solid lightgray;
    background: #fff;
    font-size: 16px;
    color: rgb(0, 0, 32);
    outline: none;

    
    &:focus{
        border: 1px solid rgb(0, 0, 196);
    };
    
`
export const Textarea = styled.textarea`
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137);
    margin-bottom: 20px;
    border: 2px solid lightgray;
    background: #fff;
    font-size: 16px;
    color: rgb(0, 0, 32);
    outline: none;

    &:focus{
        border: 1px solid rgb(0, 0, 196);
    };

    @media screen and (max-width: 460px){
        resize: none;
    }

`

export const Button = styled.button`
    padding: 20px;
    border: none;
    background-color: #01bf71;
    font-weight: 500;
    font-size: 20px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
    &:hover {
        transition: 0.2s ease-in-out;
        background:#ccc;
    }
`
export const ContactContainer = styled.div`
    color: black;
    background: #fff;


    @media screen and (max-width: 768px){
        padding: 40px 0;
    };

    @media screen and (max-width: 420px){
        height: 1100px;
        margin-bottom: 20px;
    };
    
`;
export const ContactH1 = styled.h1`
    width:100%;
    font-size: 2.5rem;
    color: black;
    margin-top: 20px;
    padding: 10px;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    };

    @media screen and (max-width: 640px){
        height:800px;
    };
    @media screen and (max-width: 540px){
        height:850px;
    };

    @media screen and (max-width: 460px){
        height:900px;
    };
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    margin-right: 25px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 460px){
        padding: 20px 0;
        margin-bottom: 3px;
    };
`;
export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
`;

export const Contacts= styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Conta = styled.p`
    padding: 20px 0;
    font-size: 20px;

` 
