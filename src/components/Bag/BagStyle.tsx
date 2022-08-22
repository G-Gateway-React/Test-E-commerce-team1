import styled from "@emotion/styled";

export const RightStyle = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: #000f08;
  margin-top: 15px;
  display: flex;
 
  @media screen and (max-width: 600px) {
      margin-right: 10px;
      font-size: 18px;
    }
`;
export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  @media screen and (max-width: 600px){
    margin: 15px 0;
  }
`;
export const LeftStyle = styled.div`
  text {
    font-size: 30px;
    line-height: 48px;
    letter-spacing: 0.04em;
    color: #000f08;
    margin-right: 30px;
    @media screen and (max-width: 600px) {
      margin-right: 10px;
      font-size: 25px;
    }
  }
  small {
    font-size: 24px;
    line-height: 24px;
    color: #8c8c8c;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;
export const RemoveStyle = styled.div`
  justify-content: end;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: #000f08;
  margin-top: 30px;
  display: flex;
  span{
    margin-bottom: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px; 
    span{
      margin-bottom: 5px;
    }
  }
`;
export const TotalStyle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #d1094b;
  @media screen and (max-width: 600px){
      font-size: 22px;
    }
`;
export const Bg = styled.div`
  mix-blend-mode: multiply;
`;
export const BagItemStyle = styled.div`
  display: flex;
  margin-top: 4%;
  div {
    display: flex;
    flex-direction: column;
    span {
      display: flex;
    }
  }
`;
export const Astyle = styled.div`
  margin-bottom: 8%;

  strong {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.04em;
    color: #000f08;
    @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.03em;
    }
  }
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 24px;
    color: #d1094b;
    @media screen and (max-width: 600px){
      font-size: 18px;
    }
  }
`;

export const PayStyled = styled.div`
  display: flex;
  justify-content: center;

`;
export const Div = styled.div`
  width: 5rem;
  height: 3rem;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  margin-left: .5rem;
  margin-right: .5rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px){
    width:3.125rem;
  height: 1.875rem;
  }
`;
export const Img = styled.img`
  /* width: 60px;
  height: 60px;
  position: relative;
  margin: -5px auto;
  display: flex; */
  position: absolute;
  width: 80%;
  margin: -0.5rem auto;
  object-fit: cover;
  @media screen and (max-width: 600px){
    margin: -0.35rem auto;
  }
`;
