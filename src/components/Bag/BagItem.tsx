import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Astyle, BagItemStyle, RemoveStyle } from "./BagStyle";

interface Props {
  image: any;
  title: string;
  price: string;
  color: string;
  size: string;
  quantity: number;
}

const BagItem: React.FC<Props> = ({
  image,
  price,
  title,
  color,
  size,
  quantity,
}) => {
  return (
    <>
      <BagItemStyle>
        <div>{image}</div>
        <div>
          <Astyle>
            <strong>{title}</strong>
            <span> {price}</span>
          </Astyle>
          <RemoveStyle>
            <span>
              COLOR: {color} <ExpandMoreIcon />
            </span>
            <span>
              SIZE: {size} <ExpandMoreIcon />
            </span>
            <span>
              QUANTITY: {quantity} <ExpandMoreIcon />
            </span>
          </RemoveStyle>
        </div>
      </BagItemStyle>
    </>
  );
};
export default BagItem;
