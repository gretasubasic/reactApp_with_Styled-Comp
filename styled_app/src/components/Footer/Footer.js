import React from 'react'
import { Button } from "../../GlobalStyles";

import {FooterSection, Form, FormInput, FooterHeadline} from "./Footer.elements";


const Footer = () => {
    return (
        <FooterSection>
            <FooterHeadline>Get Notified When We Launch</FooterHeadline>
            <Form>
                <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button primary fontBig>Sign Up</Button>
                
            </Form>

        </FooterSection>
    )
}

export default Footer
