import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Team from "components/Team";

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
};

const textContainerStyle = {
  background: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

export default function TeamDashboard() {
  return (
    <Box sx={containerStyle}>
      <Box sx={textContainerStyle}>
        <Typography variant="h4" component="h1" gutterBottom>

        </Typography>
        <Team />
      </Box>
    </Box>
  );
}