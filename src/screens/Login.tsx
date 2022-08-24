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
  height: 70vh;
  border: 1px solid #000;
  width: 450px;
  border-radius: 14px;
  padding: 35px 50px;
`;

const ButtonSignup = styled(Button)`
  width: 100%;
  height: 50px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background: #000;
  color: #fff;
  margin: 40px 0 30px;
  &:hover {
    background: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

export const Login = () => {
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
            SIGN IN
          </Typography>
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
                fontSize: "0.9rem",
              }}
            >
              Remember Me
            </Typography>
          </Box>
          <Box sx={{
            height: "100%",
            display: "flex",
            flexDirection:"column",
            justifyContent: "end",
          }}>
          <ButtonSignup>Sign in</ButtonSignup>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              textAlign: "center",
              color: "#D1094B",
              textDecoration: "underline",
            }}
          >
            I DON’T HAVE AN ACCOUNT ! CREATE ACCOUNT
          </Typography>
          </Box>
        </Form>
      </Box>
    </>
  );
};
