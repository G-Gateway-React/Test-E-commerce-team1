import Nav from "../components/Nav/Nav";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

const Form = styled.form`
  display: flex;
  gap: 5px;
  flex-direction: column;
  border: 1px solid #000;
  width: 450px;
  border-radius: 14px;
  padding: 35px 50px;
`;
export interface ProductButton {
  ProductButton?: boolean;
}

export const ButtonSignup = styled(Button)`
  width: ${(p: ProductButton) => (p.ProductButton ? "65%" : "100%")};
  height: ${(p: ProductButton) => (p.ProductButton ? "60px" : "50px")};
  display: flex;
  gap: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background: #000;
  color: #fff;
  margin: ${(p: ProductButton) => (p.ProductButton ? "0" : "40px 0 30px")};
  &:hover {
    background: ${(p: ProductButton) => (p.ProductButton ? "#000" : "#FFF")};
    border: 2px solid #000;
    border-color: ${(p: ProductButton) =>
      p.ProductButton ? "#D1094B" : "#000"};
    color: ${(p: ProductButton) => (p.ProductButton ? "#D1094B" : "#000")};
  }
`;

export const SignUp = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Nav black NoOfItems={2} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Form>
          <Typography
            sx={{
              marginBottom: "10px",
              letterSpacing: "0.03em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            CREATE ACCOUNT
          </Typography>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
          />
          <TextField id="standard-basic" label="Last Name" variant="standard" />
          <TextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
          />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Box sx={{ display: "flex", margin: "15px 0" }}>
            <Checkbox
              size="small"
              {...label}
              // defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
                margin: "0 10px 0 0",
                padding: "0",
                display: "inline",
              }}
            />

            <Typography
              sx={{
                // marginBottom: "20px",
                // letterSpacing: "0.03em",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.71rem",
              }}
            >
              Let's get personal! We'll send you only the good stuff: Exclusive
              early access to Sale, new arrivals and promotions. No nasties.
            </Typography>
          </Box>

          <Typography
            sx={{
              // marginBottom: "20px",
              // letterSpacing: "0.03em",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.71rem",
              textAlign: "center",
              color: "#8C8C8C",
              "& span": {
                color: "#000",
                textDecoration: "underline",
              },
            }}
          >
            By signing up you agree to <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>
          </Typography>
          <ButtonSignup>REGISTER NOW</ButtonSignup>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              textAlign: "center",
              color: "#D1094B",
              textDecoration: "underline",
            }}
          >
            I HAVE AN ACCOUNT
          </Typography>
        </Form>
      </Box>
    </>
  );
};
