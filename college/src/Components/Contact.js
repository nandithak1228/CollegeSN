import React from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import contact from "../Assets/contactus.jpg"; 

const ContactPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 4,
          borderRadius: 3,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          

        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
          sx={{ fontWeight: 600 }}
        >
          Contact Us
        </Typography>

        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          sx={{ mb: 2 ,"&:hover": {
              backgroundColor: "#ddddebff",color:"white",},}}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{ mb: 2 ,"&:hover": {
              backgroundColor: "#ddddebff",color:"white",},}}
        />

        <TextField
          fullWidth
          label="Contact"
          variant="outlined"
          sx={{ mb: 2 ,"&:hover": {
              backgroundColor: "#ddddebff",color:"white",},}}
        />

        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          sx={{ mb: 2 ,
            "&:hover": {
              backgroundColor: "#ddddebff",color:"white",},}}
        />

        <Button variant="contained" fullWidth sx={{ py: 1.2,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#22184eff",} ,}}>
          Send Message
        </Button>
      </Paper>
    </Box>
  );
};

export default ContactPage;
