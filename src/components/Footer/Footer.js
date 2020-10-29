import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterHeading,
  FooterSubText,
  Form,
  FormInput,
  SociaMedia,
  SociaMediaWrap,
  SociaLogo,
  SociaIcons,
  SociaIconLink,
  WebsiteRights,
  SociaIcon,
} from "./Footer.Element";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterHeading>
            Join Me! exclusive membership to receive the New Storie
            <FooterSubText>You can unsubscribe at any time.</FooterSubText>
            <FooterSubText>
              <Form>
                <FormInput name='email' type='email' placehoder='Your email' />
                <Button fontBig>Subscribe</Button>
              </Form>
            </FooterSubText>
          </FooterHeading>
        </FooterSubscription>
        <SociaMedia>
          <SociaMediaWrap>
            <SociaLogo to='/'>
              BlogMe
              <SociaIcon />
            </SociaLogo>
            <WebsiteRights>BlogMe copy Right2020</WebsiteRights>
            <SociaIcons>
              <SociaIconLink
                href={"https://web.facebook.com/whoimiwhat"}
                target='_blank'
                aria-label='facebook'
              >
                <FaFacebook />
              </SociaIconLink>
              <SociaIconLink
                href={"https://www.instagram.com/nantap0ng101/"}
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SociaIconLink>
              <SociaIconLink
                href={"https://github.com/Bsgitt"}
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </SociaIconLink>
            </SociaIcons>
          </SociaMediaWrap>
        </SociaMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
