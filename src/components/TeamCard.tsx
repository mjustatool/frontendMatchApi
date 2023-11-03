import { Box, Typography, css, styled } from "@mui/material";
import Paper from '@mui/material/Paper';
import { ReactElement } from "react";
import Team from "./Team";
const CardContainer = styled(Paper)`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled(Typography)`
  font-size: 1.5rem;
  margin: 0;
`;

export default function TeamCard({ onClick }: { onClick: () => void }): ReactElement {
  return (
    <Box>
      <CardContainer
        onClick={onClick}
        css={css`
          text-align: center;
        `}
      >
        <CardTitle>Teams</CardTitle>
        <Team />
      </CardContainer>
    </Box>
  );
}