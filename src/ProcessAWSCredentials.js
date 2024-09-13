import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { toast } from "react-toastify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Dark theme
import Footer from "./Footer";

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
            toast.error("Invalid credentials format!");
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
        <Box sx={{ padding: "10px", backgroundColor: "#f5f5f5", borderRadius: "8px", margin: "0 auto", textAlign: "center" }}>
            {/* Headline */}
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}>
                AWS Credentials Processor
            </Typography>

            {/* Tagline */}
            <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic", color: "#555" }}>
                Get your AWS credentials in the correct format, instantly.
            </Typography>

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

                <Box sx={{ display: 'flex', gap: 2, justifyContent: "flex-end" }}>
                    <Button type="submit" variant="contained" color="primary">
                        Process
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                </Box>
            </form>

            {outputValue && (
                <Box mt={6} sx={{ position: 'relative', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f5f5f5', padding: '16px', overflow: 'auto' }}>
                    <IconButton
                        onClick={handleCopy}
                        sx={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: '#fff', '&:hover': { backgroundColor: '#f0f0f0' } }}
                    >
                        <ContentCopy />
                    </IconButton>

                    <Typography sx={{ textAlign: "left", color: '#1976d2' }} variant="h6" gutterBottom>Processed Credentials:</Typography>

                    {/* Code highlighter */}
                    <SyntaxHighlighter
                        language="bash"
                        style={materialDark} // Dark theme for black background
                        showLineNumbers={true}
                        wrapLines={true}
                        customStyle={{
                            backgroundColor: "#000", // Set background to black
                            padding: "16px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            overflowX: "auto",
                            color: "#fff", // Set default text color to white
                        }}
                        codeTagProps={{
                            style: {
                                backgroundColor: "transparent", // Remove background from highlighted text
                            },
                        }}
                    >
                        {outputValue}
                    </SyntaxHighlighter>
                </Box>
            )}
            <Footer />
        </Box>
    );
};

export default ProcessAWSCredentials;
