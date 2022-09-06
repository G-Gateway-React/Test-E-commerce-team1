import Nav from "../components/Nav/Nav";
import { Typography, CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordValidation } from "../Utils/validation";
import { useAppDispatch, useAppSelector } from "../store";
import { loginThunk } from "../store/auth";
import toast from "react-hot-toast";

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().matches(
    passwordValidation.exp,
    passwordValidation.msg
  ),
});

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const isLoading = useAppSelector((state) => state.auth.loading);

  const dispatch = useAppDispatch();
  const submitHandler = async (values: FormValues) => {
    const { email, password } = values;
    const loginResult = await dispatch(
      loginThunk({
        email,
        password,
      })
    );

    if (loginThunk.rejected.match(loginResult)) {
      toast.error("Incorrect email or passowrd");
    }
    if (loginThunk.fulfilled.match(loginResult)) {
      toast.success("Login Success");
    }
  };

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
        <Form onSubmit={handleSubmit(submitHandler)}>
          {isLoading && <CircularProgress />}
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
            label="Email"
            {...register("email")}
            error={errors?.email?.message ? true : false}
            helperText={errors?.email?.message}
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Password"
            {...register("password")}
            error={errors?.password?.message ? true : false}
            helperText={errors?.password?.message}
            variant="standard"
          />
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
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <ButtonSignup type="submit" >Sign in</ButtonSignup>
            <Typography
              onClick={() => navigate("/SignUp")}
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                textAlign: "center",
                color: "#D1094B",
                textDecoration: "underline",
                cursor: "pointer",
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
