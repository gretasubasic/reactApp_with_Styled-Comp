import React from 'react'

import {PricingSection, PricingHeadline, PricingPanelLeft, PricingPanelRight, PricingWrapper, HeadlineContainer, Headline,
ParagraphContainer, Para, h2Container, HeadlineTwo, ListContainer, List} from "./Pricing.elements"

const PricingPage = ({h3, paragraph, h2, list, about, listItemOne, listItemTwo, second_h3, second_para, h2_right, listItemThree, listItemFour}) => {
    return (
        <PricingSection>
            <PricingHeadline>Our Pricing Plans</PricingHeadline>

            <PricingWrapper>
                <PricingPanelLeft>
                <HeadlineContainer>
                    <Headline>{h3}</Headline>
                </HeadlineContainer>
                <ParagraphContainer>
                <Para>{paragraph}</Para>
                </ParagraphContainer>
                <h2Container>
                    <HeadlineTwo>{h2}</HeadlineTwo>
                </h2Container>
            <ListContainer>
                <List>{listItemOne} </List>
                <List>{listItemTwo}</List>
            </ListContainer>
                 </PricingPanelLeft>

            <PricingPanelRight>
            <HeadlineContainer>
                    <Headline>{h3}</Headline>
                </HeadlineContainer>
                <ParagraphContainer>
                <Para>{second_para}</Para>
                </ParagraphContainer>
                <h2Container>
                    <HeadlineTwo>{h2_right}</HeadlineTwo>
                </h2Container>
            <ListContainer>
                <List>{listItemThree} </List>
                <List>{listItemFour}</List>
            </ListContainer>
            </PricingPanelRight>
            </PricingWrapper>


        </PricingSection>
    )
}

export default PricingPage
