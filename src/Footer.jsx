import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0d47a1', // Darker blue for a sleeker look
        color: '#fff',
        py: 2,
        textAlign: 'center',
        width: '100%',
        bottom: 0,
        left: 0,
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)', // Adds a shadow for depth
        zIndex: 1000, // Ensures the footer stays above other content
      }}
    >
      <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500 }}>
        Made with{' '}
        <IconButton
          aria-label="love"
          sx={{
            color: 'red',
            padding: '0 5px',
            verticalAlign: 'middle',
            '&:hover': { transform: 'scale(1.2)', transition: '0.3s' }, // Smooth hover effect on the heart
          }}
        >
          <FavoriteIcon />
        </IconButton>
        by Rashid Ali Khan
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontSize: '0.85rem', color: '#cfd8dc', marginTop: '5px', display: 'block' }}
      >
        © {new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
