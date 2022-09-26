import { Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import { FooterStyle } from "../Cards/Style";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const BoxTitle = styled(Box)`
  font-weight: bold;
  margin-bottom: 30px;
  text-decoration: none;
  color: #000;
`;

export const StyledFacebook = styled(FacebookIcon)`
  @media screen and (max-width: 992px) {
    font-size: medium;
  }
  @media screen and (max-width: 600px) {
    font-size: small;
  }
`;

export const StyledInstagram = styled(InstagramIcon)`
  @media screen and (max-width: 992px) {
    font-size: medium;
  }
  @media screen and (max-width: 600px) {
    font-size: small;
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterStyle>
        <Grid width="25%">
          <BoxTitle>CUSTOMER SERVICE</BoxTitle>

          <StyledLink href="/" color="inherit">
            CONTACT
          </StyledLink>

          <StyledLink href="/" color="inherit">
            TRACK ORDER
          </StyledLink>

          <StyledLink href="/" color="inherit">
            DELIVERY & RETURNS
          </StyledLink>

          <StyledLink href="/" color="inherit">
            PAYMENTS
          </StyledLink>

          <StyledLink href="/" color="inherit">
            MAKE A RETURN
          </StyledLink>

          <StyledLink href="/" color="inherit">
            FAQ
          </StyledLink>
        </Grid>

        <Grid width="25%">
          <BoxTitle>INFO</BoxTitle>

          <StyledLink href="/" color="inherit">
            GIFT VOUCHERS
          </StyledLink>

          <StyledLink href="/" color="inherit">
            SIZE GUIDE
          </StyledLink>

          <StyledLink href="/" color="inherit">
            CAREERS
          </StyledLink>

          <StyledLink href="/" color="inherit">
            ABOUT US
          </StyledLink>

          <StyledLink href="/" color="inherit">
            GUIDE
          </StyledLink>

          <StyledLink href="/" color="inherit">
            LEGAL POLICIES
          </StyledLink>
        </Grid>

        <Grid width="25%">
          <BoxTitle>FOLLOW US</BoxTitle>
          <span>
            <StyledFacebook />
            <StyledLink href="/" color="inherit">
              FACEBOOK
            </StyledLink>
          </span>
          <span>
            <StyledInstagram />
            <StyledLink href="/" color="inherit">
              INSTAGRAM
            </StyledLink>
          </span>
        </Grid>

        <Grid width="25%">
          <BoxTitle>CONTACT US</BoxTitle>

          <StyledLink href="/" color="inherit">
            HELLO @SHOESLY.COM
          </StyledLink>

          <StyledLink href="/" color="inherit">
            +972597097813
          </StyledLink>
        </Grid>
      </FooterStyle>
    </>
  );
};

export default Footer;
