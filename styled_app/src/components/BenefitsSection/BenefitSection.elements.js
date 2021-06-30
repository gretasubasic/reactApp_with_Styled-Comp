import styled from "styled-components";

export const BenefitSect = styled.div`
color: #070c20;
padding: 160px 0;
background: ${({ lightBg }) => (lightBg ? "#fff" : "#070c20")};
`;

export const BenefitContainerWrapper = styled.div`

display: flex;
flex-wrap: wrap;
padding-left: 0;
margin-top: 0;

`;

export const BenefitContainer = styled.div`
color: #676c80;
font-size: 14px;
margin-left: 50px;
width: 300px;
height: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Image = styled.img`
width: 200px;
height: auto;


`;

export const ContainerText = styled.p`
color: #676c80;
font-size: 16px;
margin: 10px;
padding: 20px;


`;

export const SubHeadline = styled.h2`
font-size: 18px;
color: #fcfdfd;
margin-top: 2rem;
display: flex;



`;

