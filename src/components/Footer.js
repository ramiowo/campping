import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;
  max-width: 430px;
  margin: 0 auto;
  background-color: #44463a;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;
const Copyright = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 30px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} CAMP PING. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
