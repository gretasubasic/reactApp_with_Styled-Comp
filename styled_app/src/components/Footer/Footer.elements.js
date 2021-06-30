import styled from "styled-components";

export const FooterSection = styled.div`
color: #070c20;
padding: 160px 0;
background-color: #070c20;

`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
}

`;

export const FormInput = styled.input`
padding: 10px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #fff;
&::placeholder {
    color: #242424;
}

@media screen and (max-width: 820px) {
    width: 100%;
    margin: 0px 0px 16px 0;
}
`;

export const FooterHeadline = styled.h2`
font-size: 32px;
color: #fcfdfd;
text-align: center;
margin-top: 0;
margin-bottom: 50px;
padding: 20px;

`