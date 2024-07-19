import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import resumeData from '../../utils/resumeData';
// import CustomButton from '../CustomButton'; // Corrected path or remove if not used
import '../../pages/Resume/Resume.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Use this state if necessary

  if (!resumeData) {
    return <div>Loading...</div>; // Render a loading state if resumeData is not yet available
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = form.name ? '' : 'Name is required';
    tempErrors.email = /\S+@\S+\.\S+/.test(form.email) ? '' : 'Email is not valid';
    tempErrors.message = form.message ? '' : 'Message is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Handle form submission here

      // Simulate an async operation
      setTimeout(() => {
        setForm({ name: '', email: '', message: '' });
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      {/* Contact */}
      <Grid container spacing={6} className="section pt_45 pb_45">
        {/* Contact form */}
        <Grid item xs={12} lg={6}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      value={form.name}
                      onChange={handleInputChange}
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="E-mail"
                      value={form.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                      value={form.message}
                      onChange={handleInputChange}
                      error={!!errors.message}
                      helperText={errors.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Use Button if CustomButton is not available */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={loading}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="contact_info">
                    <span>Address:</span> {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info">
                    <span>Phone:</span> {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info">
                    <span>Email:</span> {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
