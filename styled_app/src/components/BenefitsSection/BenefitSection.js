import React from 'react'
import { Container, Button } from '../../GlobalStyles';
import { BenefitSect, BenefitContainer, Image, ContainerText,BenefitContainerWrapper, SubHeadline } from "./BenefitSection.elements";



const BenefitSection = ({img, img2, img3, img4, text, text2, text3, text4, subheadline, subheadline2, subheadline3, subheadline4}) => {
    return (
        <BenefitSect>

            <BenefitContainerWrapper>

            <BenefitContainer>
            <Image src={img} />
            <SubHeadline>{subheadline}</SubHeadline>
            <ContainerText>{text}</ContainerText>
            </BenefitContainer>

        <BenefitContainer>
            <Image src={img2} />
            <SubHeadline>{subheadline2}</SubHeadline>
            <ContainerText>{text2}</ContainerText>
        </BenefitContainer>
        <BenefitContainer>
            <Image src={img3} />
            <SubHeadline>{subheadline3}</SubHeadline>
            <ContainerText>{text3}</ContainerText>
        </BenefitContainer>
        <BenefitContainer>
            <Image src={img4} />
            <SubHeadline>{subheadline4}</SubHeadline>
            <ContainerText>{text4}</ContainerText>
        </BenefitContainer>
           
        </BenefitContainerWrapper>
        </BenefitSect>
    )
}

export default BenefitSection

