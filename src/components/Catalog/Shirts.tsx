import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styled from "@emotion/styled";
import ImageShirts from "../../Assets/c.png";

export const FatherCard = styled(Card)`
  width: 32%;
  border: none;
  box-shadow: none;
  transition: all 0.5s ease-in-out;
  :hover {
    filter: grayscale(80%);
  }
`;
const Shirts: React.FC = () => {
  return (
    <FatherCard>
      <CardMedia component="img" image={ImageShirts} alt="img" />
    </FatherCard>
  );
};

export default Shirts;
