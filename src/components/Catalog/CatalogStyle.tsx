import styled from "styled-components";

export const CatalogTitle = styled.div`
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.04em;
  color: #000f08;
  margin-bottom: 20px;
`;

export const SearchStyled = styled.div`
  input {
    width: 100%;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    border-bottom: 1px solid #e5e0eb;
    outline: none;
    margin-bottom: 24px;
    ::placeholder {
      color: #aba7af;
    }
    /* @media screen and (max-width: 600px) {
      width: 400px;
    } */
  }
  button {
    border: none;
    margin-left: -50px;
    background: none;
    font-weight: bold;
    /* @media screen and (max-width: 600px) {
      font-size: 12px;
    } */
  }
`;

export const CardStyle = styled.div`
  display: flex;
  gap: 15px;
  justify-content: start;
  flex-wrap: wrap;
  > div {
    /* width: 30%;
    height: fit-content ; */
    display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  box-sizing: border-box;
  height: 180px;
  width: 32%;
  }
`;

export const LeftStyle = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 24px;
    line-height: 24px;
    color: #000f08;
    margin-bottom: 10px;
  }
`;

export const FilterStyle = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 24px;
    line-height: 24px;
    color: #000f08;
    margin-top: 18px;
  }
`;
export const FilterTitle = styled.div`
  color: #8c8c8c;
  font-size: 24px;
  line-height: 24px;
  margin: 15px 0;
`;

export const CheckboxStyle = styled.input`
  position: relative;
  /* top: -0.375rem;
  margin: 0 1rem 0 0; */
  cursor: pointer;

  ::before {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 1rem;
    height: 1rem;
    border: 2px solid #f2f2f2;
  }
  :checked::before {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    height: 0.5rem;
    border-color: #d1094b;
    border-top-style: none;
    border-right-style: none;
  }
  ::after {
    content: "";
    position: absolute;
    top: -0.125rem;
    left: 0;
    width: 1.1rem;
    height: 1.1rem;
    background: #fff;
    cursor: pointer;
  }
`;
