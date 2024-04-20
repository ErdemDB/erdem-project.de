import { useRef } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Profilcard from './profilecard/Profilecard';
import ContactForm from './contactform/ContactForm';

import texts from '../../texts.json';
import Resume from './resume/Resume';

import './UeberMich.css';

const UeberMich: React.FC = () => {
  const lebenslaufRef = useRef<HTMLDivElement>(null);

  const handleLebenslaufClick = () => {
    lebenslaufRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <Container>
        <Grid container className="whiteSection">
          <Grid item md className="sectionContent">
            <Typography variant="h4">
              {texts.cv.ueberMich.title}
            </Typography>
            <Typography variant="body1">
              {texts.cv.ueberMich.content}
            </Typography>
          </Grid>
          <Grid item xs md className="sectionContent">
            <Profilcard onLebenslaufClick={handleLebenslaufClick} />
          </Grid>
        </Grid>

        <Grid container className="darkSection">
          <Grid container className='darkSectionContainer'>
            <Grid item xs md className="sectionContent">
              <Typography variant="h4">Kontaktiere mich</Typography>
            </Grid>
            <Grid item xs={12} md className="sectionContent">
              <ContactForm />
            </Grid>
          </Grid>
        </Grid>

        <Grid container className="whiteSection" ref={lebenslaufRef}>
          <Grid item md className="sectionContent">
            <Resume />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default UeberMich;