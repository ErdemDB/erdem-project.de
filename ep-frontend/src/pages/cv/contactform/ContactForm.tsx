import React, { useState } from 'react';
import { Paper, Grid, TextField, Button, Typography } from '@mui/material';
import useMailSender from './Controller';
import { MailDTO } from '../../../api-client';
import './ContactForm.css';
import texts from '../../../texts.json';

interface Errors {
  email?: string;
  name?: string;
  subject?: string;
  message?: string;
}

interface Touched {
  email: boolean;
  name: boolean;
  subject: boolean;
  message: boolean;
}

const ContactForm: React.FC = () => {
  const [mailDTO, setMailDTO] = useState<MailDTO>({
    from: '',
    name: '',
    subject: '',
    text: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({
    email: false,
    name: false,
    subject: false,
    message: false,
  });

  const { sendMail } = useMailSender();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateText = (text: string): boolean => {
    const regex = /[a-zA-Z]/;
    return regex.test(text) && text.trim().length > 0;
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!mailDTO.from || !validateEmail(mailDTO.from)) newErrors.email = 'Ungültige E-Mail-Adresse';
    if (!mailDTO.name || !validateText(mailDTO.name)) newErrors.name = 'Name erforderlich';
    if (!mailDTO.subject || !validateText(mailDTO.subject)) newErrors.subject = 'Betreff erforderlich';
    if (!mailDTO.text || !validateText(mailDTO.text)) newErrors.message = 'Nachricht erforderlich';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof MailDTO) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTouched({ ...touched, [field]: true });
    setMailDTO(prevState => ({
      ...prevState,
      [field]: value
    }));
    validate();
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setTouched({ email: true, name: true, subject: true, message: true });

    if (validate()) {
      sendMail(mailDTO);
      setFormSubmitted(true);
    }
  };

  return (
    <Paper className="ContactFormContainer" variant="outlined">
      {!formSubmitted ? (
        <Grid container direction="column" alignItems="left" justifyContent="left" spacing={2}>
          <Grid item xs={12}>
            <TextField
              className={`outlined-basic ${errors.email ? 'error-field' : ''}`}
              label="E-Mail"
              variant="outlined"
              size="small"
              value={mailDTO.from}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('from')(e)}
              error={Boolean(errors.email)}
              helperText={touched.email ? errors.email : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={`outlined-basic ${errors.name ? 'error-field' : ''}`}
              label="Name"
              variant="outlined"
              size="small"
              value={mailDTO.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name')(e)}
              error={Boolean(errors.name)}
              helperText={touched.name ? errors.name : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={`outlined-basic ${errors.subject ? 'error-field' : ''}`}
              label="Betreff"
              variant="outlined"
              size="small"
              value={mailDTO.subject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('subject')(e)}
              error={Boolean(errors.subject)}
              helperText={touched.subject ? errors.subject : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={`outlined-basic ${errors.message ? 'error-field' : ''}`}
              label="Nachricht"
              variant="outlined"
              size="small"
              multiline
              rows={4}
              fullWidth
              value={mailDTO.text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('text')(e)}
              error={Boolean(errors.message)}
              helperText={touched.message ? errors.message : ''}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: "30px" }}>
            <Button variant="contained" onClick={handleSubmit}>Senden</Button>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h4">
          {texts.cv.contactForm.formSubmitted}
        </Typography>
      )}
    </Paper>
  );
};

export default ContactForm;
