import { Button, Grid, Box, Card } from '@mui/material';

import './ToDo.css';

const TodoCard: React.FC = () => {
  return (
    <Card sx={{ border: '1px solid' }} variant="outlined">
      Test
    </Card>
  );
}


const ToDo: React.FC = () => {
  return (
    <Grid container>
      <Grid md />
      <Grid md />
      <Grid xs md sx={{ marginTop: '3em' }}>
        <Button variant="contained">Neue Aufgabe</Button>
      </Grid>
      <Grid container sx={{ margin: '3em' }}>
        <Box sx={{ minWidth: 275, margin: '1em 3em 3em 3em' }}>
          <TodoCard />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ToDo;