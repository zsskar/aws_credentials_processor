import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    TextField,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';

const LoginPopup = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md">
            <DialogContent sx={{ display: 'flex', p: 0 }}>
                {/* Left Side */}
                <Box
                    sx={{
                        width: '40%',
                        bgcolor: '#00c48c',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        p: 3,
                        position: 'relative',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Simple, Free Investing.
                    </Typography>
                    <Divider sx={{ backgroundColor: '#fff', width: '50px', my: 2 }} />
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                        Stocks
                    </Typography>
                </Box>

                {/* Right Side */}
                <Box sx={{ width: '60%', p: 4, position: 'relative' }}>
                    <IconButton
                        onClick={onClose}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
                        Welcome to Groww
                    </Typography>

                    <Button
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        fullWidth
                        sx={{
                            textTransform: 'none',
                            color: '#5f6368',
                            borderColor: '#dadce0',
                            mb: 2,
                        }}
                    >
                        Continue with Google
                    </Button>

                    <Divider sx={{ my: 2 }}>Or</Divider>

                    <TextField
                        label="Your Email Address"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ bgcolor: '#00c48c', textTransform: 'none' }}
                    >
                        Continue
                    </Button>

                    <Typography variant="caption" display="block" sx={{ mt: 2, color: '#777' }}>
                        By proceeding, I agree to <a href="#" style={{ color: '#00c48c' }}>T&C</a>,{' '}
                        <a href="#" style={{ color: '#00c48c' }}>Privacy Policy</a> &{' '}
                        <a href="#" style={{ color: '#00c48c' }}>Tariff Rates</a>
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default LoginPopup;
