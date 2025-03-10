import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#333', color: 'white', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
          {/* Sol kısım */}
          <Box mb={{ xs: 2, md: 0 }}>
            <Typography variant="h6" fontWeight="bold">Portfolyo</Typography>
            <Typography variant="body2" color="textSecondary">© 2024 Tüm hakları saklıdır.</Typography>
          </Box>

          {/* Sağ kısım (Sosyal Medya Linkleri) */}
          <Box display="flex" gap={2}>
            <Link href="https://github.com/emirkalkan12" target="_blank" rel="noopener noreferrer" color="inherit">
              <GitHub fontSize="large" />
            </Link>
            <Link href="https://linkedin.com/in/emirhankalkan" target="_blank" rel="noopener noreferrer" color="inherit">
              <LinkedIn fontSize="large" />
            </Link>
            <Link href="https://twitter.com/emikalkann" target="_blank" rel="noopener noreferrer" color="inherit">
              <Twitter fontSize="large" />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
