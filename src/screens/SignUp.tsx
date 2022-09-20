import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../store";
import { signupThunk } from "../store/auth";
import { passwordValidation } from "../Utils/validation";
import toast from "react-hot-toast";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";

interface FormValues {
  FirstName: string;
  LastName: string;
  email: string;
  password: string;
  check: boolean;
  // confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required(),
  LastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().matches(
    passwordValidation.exp,
    passwordValidation.msg
  ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  check: Yup.bool().oneOf([true], "Checkbox selection is required"),
});

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
  const [maskPassword, SetMaskPassword] = useState(false);
  const handleClickMaskPassword = () => {
    SetMaskPassword(!maskPassword);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useAppDispatch();

  const submitHandler = async (values: FormValues) => {
    const { FirstName, LastName, password, email } = values;
    const name = FirstName + LastName;
    const result = await dispatch(
      signupThunk({
        name,
        email,
        password,
      })
    );

    if (signupThunk.rejected.match(result)) {
      if (result.payload?.msg) {
        toast.error(result.payload.msg);
      }
    }
    if (signupThunk.fulfilled.match(result)) {
      toast.success("Signup success");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Form onSubmit={handleSubmit(submitHandler)}>
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
            error={errors.FirstName?.message ? true : false}
            helperText={errors?.FirstName?.message}
            id="standard-basic"
            label="FitstName"
            variant="standard"
            {...register("FirstName")}
          />
          <TextField
            error={errors.LastName?.message ? true : false}
            helperText={errors?.LastName?.message}
            id="standard-basic"
            label="LastName"
            {...register("LastName")}
            variant="standard"
          />
          <TextField
            id="standard-basic"
            error={errors.email?.message ? true : false}
            helperText={errors?.email?.message}
            type="email"
            label="Email"
            {...register("email")}
            variant="standard"
          />
          <Box
            sx={{
              position: "relative",
            }}
          >
            <TextField
              id="standard-basic"
              type={maskPassword ? "text" : "password"}
              error={errors.password?.message ? true : false}
              helperText={errors?.password?.message}
              label="Password"
              {...register("password")}
              variant="standard"
              sx={{
                width: "100%",
              }}
            />
            <IconButton
              onClick={handleClickMaskPassword}
              style={{
                position: "absolute",
                right: "0",
              }}
            >
              {maskPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", margin: "15px 0" }}>
            <Checkbox
              size="small"
              {...register("check")}
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
              <span style={{ color: "red", fontSize: "0.9rem" }}>
                <br></br>
                {errors.check?.message}
              </span>
            </Typography>
            {/* <div className="invalid-feedback">{errors.check?.message}</div> */}
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
          <ButtonSignup type="submit">REGISTER NOW</ButtonSignup>
          <Typography
            onClick={() => navigate("/Login")}
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              textAlign: "center",
              color: "#D1094B",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            I HAVE AN ACCOUNT
          </Typography>
        </Form>
      </Box>
    </>
  );
};
