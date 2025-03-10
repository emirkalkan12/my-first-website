import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu gönderme işlemi burada yapılacak
    alert('Mesaj gönderildi!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, p: 3, backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
        <Typography variant="h4" align="center" sx={{ color: '#003366' }}>
          İletişim
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3, color: '#003366' }}>
          Benimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* İsim */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Adınız"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* E-posta */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-posta"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 2 }}
              />
            </Grid>

            {/* Mesaj */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mesajınız"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                sx={{ mb: 3 }}
              />
            </Grid>

            {/* Gönder Butonu */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#003366',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#00509e',
                  },
                }}
              >
                Gönder
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
