import { InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import ITeam from 'types/ITeam';

export default function Team() {
  const [data, setData] = useState<ITeam[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState('laliga');

  useEffect(() => {

    fetch("http://localhost:8080/graphql", {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        query: `query {
          getDataInserted(comp: "${selectedLeague}"){
            id
            teamName
            classment
            matchPlayed
            wins
            matchDraw
            defeat
            points
          }
        }`
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        setData(data.data.getDataInserted ?? []); // Update the state with the correct data
        console.log(data)
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        throw new Error("Error response was not ok");
      });
  }, [selectedLeague]);

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
  };
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 90 },
    {
      field: 'teamName',
      headerName: 'Team Name',
      width: 150,
      editable: true,
    },
    {
      field: 'classment',
      headerName: 'classment',
      width: 150,
      editable: true,
    },
    {
      field: 'matchPlayed',
      headerName: 'Match Played',
      width: 110,
      editable: true,
    },
    {
      field: 'wins',
      headerName: 'Wins',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'matchDraw',
      headerName: 'Match Draw',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'defeat',
      headerName: 'Defeats',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'points',
      headerName: 'Points',
      type: 'number',
      width: 110,
      editable: true,
    }
  ];

  return (
    <Box sx={{ height: 700, width: 1200, display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '16px',
        }}
      >
        <InputLabel>Choose League:</InputLabel>
        <Select
          value={selectedLeague}
          onChange={handleLeagueChange}
        >
          <MenuItem value="premier_league">Premier League</MenuItem>
          <MenuItem value="laliga">La Liga</MenuItem>
          <MenuItem value="seria">Serie A</MenuItem>
          <MenuItem value="league1">Ligue 1</MenuItem>
        </Select>
      </Box>

      {isLoading ? (
        <Box className="flex justify-center items-center">
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Box className="flex justify-center items-center">Error loading data</Box>
      ) : (
        data.length > 0 && ( // Check if data is available
          <Box sx={{ height: '80%', width: '100%' }}>
            <DataGrid
              rows={data ?? []}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
            />
          </Box>
        )
      )}
    </Box>
  );
}
