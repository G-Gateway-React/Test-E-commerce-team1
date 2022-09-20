import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styled from "@emotion/styled";

export const FatherCard = styled(Card)`
  /* width: 32%; */
  /* height: 250px; */
  border: none;
  box-shadow: none;
  transition: all 0.5s ease-in-out;
  position: relative;
  :hover {
    filter: grayscale(80%);
  }
`;

// export const MediaStyle = styled.div`
// ::before{
//   content: "";
//   width: 161px;
//   height: 64px;
//   background: #d1094b;

// }
// `

export const Rectangle = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  width: 161px;
  height: 64px;
  background: #d1094b;
  border: 1px solid #d1094b;
  border-radius: 5px;
  clip-path: polygon(100% 0, 73% 52%, 100% 100%, 0 100%, 0% 50%, 0 0);

  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
  span {
    position: absolute;
    width: 7px;
    height: 48px;
    right: 147px;
    background: #ffffff;
    border-radius: 1px;
    top: 7px;
  }
  text {
    color: #ffffff;
    position: absolute;
    right: 54px;
    top: 17px;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.04em;
  }
`;

interface TopsProps {
  price: string;
  img: string;
}

const Tops: React.FC<TopsProps> = ({ img, price }) => {
  return (
    <>
      <FatherCard>
        <CardMedia
          component="img"
          image={img}
          alt="img"
          sx={{ objectFit: "cover" }}
        ></CardMedia>
        <Rectangle>
          <text>${price}</text>
          <span></span>
        </Rectangle>
      </FatherCard>
    </>
  );
};

export default Tops;
