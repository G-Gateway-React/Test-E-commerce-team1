import { Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styled from "styled-components";

export const LeftIcon = styled(TrendingFlatIcon)`
  transform: rotate(180deg);
`;
export const StackStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const PaginationCom: React.FC = () => {
  return (
    <StackStyle>
      <Stack spacing={20}>
        <Pagination
          count={1800}
          size="small"
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: LeftIcon,
                next: TrendingFlatIcon,
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </StackStyle>
  );
};
export default PaginationCom;
