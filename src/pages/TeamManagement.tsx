import { Box } from "@mui/material";
import TeamCard from "components/TeamCard";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";


export default function TeamManagement(): ReactElement {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/students');
  };

  return (
    <Box
      sx={{
        margin: '70px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <TeamCard onClick={handleClick} />
    </Box>
  );
}
