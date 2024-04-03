import { Paper, Grid, Typography, Button, IconButton, Avatar, Divider, ButtonGroup } from '@mui/material';
import texts from '../../../texts.json';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import './Profilecard.css';

const Profilecard = () => {
  return (
    <Paper
      className="profileCardContainer"
      variant="outlined"
      square={false}>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <Grid item>
          <Avatar
            alt="Profilbild"
            src={`${process.env.PUBLIC_URL}/ueber_mich.jpg`}
            className="profileAvatar"
          />
          <Typography variant="h5">{texts.cv.profileCard.name}</Typography>
          <Typography variant="subtitle1"
            className="profileJobText">{texts.cv.profileCard.jobTitle}</Typography>
        </Grid>
        <Divider />
        <ButtonGroup variant="text" aria-label="Basic button group">
          <IconButton aria-label="LinkedIn" href={texts.cv.profileCard.linkedInLink} target='_blank'>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="GitHub" href={texts.cv.profileCard.githubLink} target='_blank'>
            <GitHubIcon className='GithubIcon'/>
          </IconButton>
          <IconButton aria-label="EMail" href={texts.cv.profileCard.email} target='_blank'>
            <EmailIcon />
          </IconButton>
        </ButtonGroup>
        <Divider />

        <Grid item>
          <Button variant="outlined">{texts.cv.profileCard.lebenslauf}</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Profilecard;