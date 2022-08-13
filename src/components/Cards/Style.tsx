import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TitleStyle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 55px;
  span {
    background-color: #d1094b;
    color: #ffff;
  }
  @media screen and (max-width: 992px) {
    font-size: 35px;
  }
  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

export const TitleMaskStyle = styled.h3`
  margin-top: 100px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const CardMaskStyle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const JoinStyle = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
  text {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
  }
  input {
    width: 500px;
    border: none;
    font-size: 15px;
    border-bottom: 1px solid #d8d8d8;
    outline: none;
    @media screen and (max-width: 600px) {
      width: 400px;
    }
  }
  button {
    color: #000;
    border: none;
    margin-left: -50px;
    background: none;
    font-weight: bold;
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
  span {
    margin-top: 30px;
  }
`;

export const FooterStyle = styled.div`
  display: flex;
  margin-top: 100px;
  gap: 100px;
  span {
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 992px) {
    font-size: 14px;
    gap: 50px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
    gap: 23px;
  }
`;
