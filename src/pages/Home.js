import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';

function Home() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Başlık ve Tanıtım Bölümü */}
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Welcome to My Blog
          </Typography>
          <Typography variant="h6" paragraph>
            This is the place where I share my thoughts, experiences, and projects. Stay tuned for updates and articles!
          </Typography>
          <Button variant="contained" color="primary" href="#about">
            Learn More About Me
          </Button>
        </Box>

        {/* Ana İçerik (3 Kolonlu Layout) */}
        <Grid container spacing={4}>
          {/* Blog Yazılarının Bulunduğu Bölüm */}
          <Grid item xs={12} md={4}>
            <Box sx={{ border: '1px solid #ddd', borderRadius: 2, p: 2, backgroundColor: '#f9f9f9' }}>
              <Typography variant="h5" gutterBottom>
                Latest Blog Posts
              </Typography>
              <Typography variant="body2" paragraph>
                Check out the latest posts on various topics including technology, programming, and personal growth. 
              </Typography>
              <Button variant="outlined" color="primary" href="#blog">
                View Posts
              </Button>
            </Box>
          </Grid>

          {/* Hakkında Bölümü */}
          <Grid item xs={12} md={4}>
            <Box sx={{ border: '1px solid #ddd', borderRadius: 2, p: 2, backgroundColor: '#f9f9f9' }}>
              <Typography variant="h5" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body2" paragraph>
                I'm a web developer passionate about creating meaningful and user-friendly experiences. I specialize in frontend and backend technologies.
              </Typography>
              <Button variant="outlined" color="primary" href="#about">
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* İletişim Bölümü */}
          <Grid item xs={12} md={4}>
            <Box sx={{ border: '1px solid #ddd', borderRadius: 2, p: 2, backgroundColor: '#f9f9f9' }}>
              <Typography variant="h5" gutterBottom>
                Contact Me
              </Typography>
              <Typography variant="body2" paragraph>
                Feel free to reach out for collaboration, freelance work, or just to say hello!
              </Typography>
              <Button variant="outlined" color="primary" href="#contact">
                Get in Touch
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;


