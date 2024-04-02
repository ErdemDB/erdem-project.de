import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Typography, Grid } from '@mui/material';
import MeinBild from '../../ueber_mich.jpg';
import Profilcard from './profilecard/Profilecard';
import texts from '../../texts.json';


import './Cv.css';

const Cv = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container className="whiteSection">
          <Grid item xs={12} md={6} className="sectionContent">
            <Typography variant="h4">
              {texts.cv.ueberMich.title}
            </Typography>
            <Typography variant="body1">
              {texts.cv.ueberMich.content}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="sectionContent">
            <Profilcard />
          </Grid>
        </Grid>
        
        <Grid container className="lighterSection">
          <Grid item xs={12} className="sectionContent">
            <Typography variant="h4">Bildungsweg</Typography>
            <Typography variant="body1">
              Hier könnten Details zu deinem Bildungsweg stehen...
            </Typography>
          </Grid>
        </Grid>

        {/* Auszeichnungen & Stipendien Sektion */}
        <Grid container className="whiteSection">
          <Grid item xs={12} className="sectionContent">
            <Typography variant="h4">Auszeichnungen & Stipendien</Typography>
            <Typography variant="body1">
              Eine Liste der Auszeichnungen und Stipendien...
            </Typography>
          </Grid>
        </Grid>

        {/* Kontaktinformationen Sektion
        <Grid container className="darkSection">
          <Grid item xs={12} className="sectionContent">
            <Typography variant="h4">Kontaktinformationen</Typography>
            <Typography variant="body1">
              Hier kommen die Kontaktinformationen hin...
            </Typography>
          </Grid>
        </Grid>
      */}
      </Container>
    </div>
  );
}

export default Cv;