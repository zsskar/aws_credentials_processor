import React, { useState } from 'react';
import { Box, Typography, Button, TextField, IconButton } from '@mui/material';
import { toast } from 'react-toastify';
import ContentCopy from '@mui/icons-material/ContentCopy';
import Footer from './Footer'; // Assuming your footer is a separate component

const ProcessAWSCredentials = () => {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [error, setError] = useState(false);

    // Function to process the input text
    const processText = (text) => {
        const lines = text.split("\n");
        const processedLines = lines.map((line) => {
            return "export " + line.replace(/\s*=\s*/, "=");
        });
        return processedLines.join("\n");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            setError(true);
            return;
        }
        setError(false);

        // Check if the input starts with 'aws_secret_access_key'
        if (!inputValue.trim().startsWith("aws_secret_access_key")) {
            toast.error("Invalid credentials format !");
            return;
        }

        const processedText = processText(inputValue);
        setOutputValue(processedText);
    };

    const handleCopy = () => {
        toast.success("Credentials copied successfully.");
        navigator.clipboard.writeText(outputValue);
    };

    const handleReset = () => {
        setInputValue("");
        setOutputValue("");
        setError(false);
    };

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Main Content */}
            <Box sx={{ flex: 1, overflowY: 'auto', padding: '20px', backgroundColor: '#f5f5f5' }}>
                {/* Headline */}
                <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}>
                    AWS Credentials Processor
                </Typography>

                {/* Tagline */}
                <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic", color: "#555", marginBottom: "30px" }}>
                    Get your credentials in the correct format
                </Typography>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Paste Credentials Here"
                        multiline
                        rows={10}
                        fullWidth
                        variant="outlined"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Paste credentials here"
                        error={error}
                        helperText={error ? "Input is required" : ""}
                        sx={{ mb: 2 }}
                        required
                    />

                    <Box sx={{ display: 'flex', gap: 2, float: 'right' }}>
                        <Button type="submit" variant="contained" color="primary">
                            Process
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleReset}>
                            Reset
                        </Button>
                    </Box>
                </form>

                {/* Output */}
                {outputValue && (
                    <Box mt={6} sx={{ position: 'relative', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#000', padding: '16px', fontFamily: 'monospace', color: '#fff', overflowX: 'auto' }}>
                        <IconButton
                            onClick={handleCopy}
                            sx={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: '#fff', '&:hover': { backgroundColor: '#f0f0f0' } }}
                        >
                            <ContentCopy />
                        </IconButton>
                        <Typography variant="h6" gutterBottom>Processed Credentials:</Typography>
                        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', margin: 0 }}>
                            {outputValue}
                        </pre>
                    </Box>
                )}
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default ProcessAWSCredentials;
