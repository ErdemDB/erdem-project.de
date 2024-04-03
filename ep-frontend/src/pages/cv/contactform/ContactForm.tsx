import React, { useState, useEffect } from 'react';
import { Paper, Grid, TextField, Button } from '@mui/material';
import './ContactForm.css';

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

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateText = (text: string): boolean => {
  const regex = /[a-zA-Z]/;
  return regex.test(text);
};

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({
    email: false,
    name: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (field: keyof Touched) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTouched({ ...touched, [field]: true });
    switch (field) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setMessage(value);
        break;
    }
  };

  useEffect(() => {
    const newErrors: Errors = {};
    if (touched.email && !validateEmail(email)) newErrors.email = 'Ungültige E-Mail-Adresse';
    if (touched.name && !validateText(name)) newErrors.name = 'Name erforderlich';
    if (touched.subject && !validateText(subject)) newErrors.subject = 'Betreff erforderlich';
    if (touched.message && !validateText(message)) newErrors.message = 'Nachricht erforderlich';

    setErrors(newErrors);
  }, [email, name, subject, message, touched]);

  return (
    <Paper className="ContactFormContainer" variant="outlined">
      <Grid container direction="column" alignItems="left" justifyContent="left" spacing={2}>
        <Grid item xs={12}>
          <TextField
            className={`outlined-basic ${errors.email ? 'error-field' : ''}`}
            label="E-Mail"
            variant="outlined"
            size="small"
            value={email}
            onChange={handleInputChange('email')}
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
            value={name}
            onChange={handleInputChange('name')}
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
            value={subject}
            onChange={handleInputChange('subject')}
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
            value={message}
            onChange={handleInputChange('message')}
            error={Boolean(errors.message)}
            helperText={touched.message ? errors.message : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" disabled={Object.keys(errors).length > 0 && Object.values(touched).some(Boolean)}>Senden</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default ContactForm;