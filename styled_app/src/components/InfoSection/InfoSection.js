import React from 'react'
import { Container, Button } from '../../GlobalStyles';
import { Link } from "react-router-dom";

import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements'

const InfoSection = ({imgStart, lightTopLine, buttonLabel, description, headline, lightText, topLine, img, alt, start }) => {
    return (
        <>
        <InfoSec>
            <Container>
                <InfoRow>
                    <InfoColumn>
                        <TextWrapper>
                           <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                           <Heading>{headline}</Heading>
                           <Subtitle>{description}</Subtitle>
                           <Link to="/sign-up">
                               <Button primary big fontBig>{buttonLabel}</Button>
                           </Link>
                        </TextWrapper>
                    </InfoColumn>

                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
                

            </Container>
        
        </InfoSec>
        </>
    )
}

export default InfoSection
