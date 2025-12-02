import React from "react";
import { Box, FormLabel, Typography, TextField, Button } from "@mui/material";
import bgImg from "C:/Users/Other/Desktop/SNProject/college/src/Assets/bgImg.png";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 0 },
        zIndex:1,
        gap: 4,
      }}
    >
     
      <Box sx={{ maxWidth: 400 ,zIndex:2}}>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "bold", mb: 2 }}
        >
          Best Colleges in Bangalore
        </Typography>
        <Typography variant="body1" sx={{ color: "white", opacity: 0.9 }}>
          Explore top colleges, courses & admissions in Bangalore with expert
          guidance.
        </Typography>
      </Box>

      <Box
        component="form"
        sx={{
          bgcolor: "rgba(255,255,255,0.95)",
          borderRadius: 2,
          p: 3,
          width: { xs: "100%", md: 360 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Get College Guidance
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <FormLabel>Your name</FormLabel>
          <TextField size="small" placeholder="Enter your name" fullWidth />

          <FormLabel>Your email</FormLabel>
          <TextField
            size="small"
            type="email"
            placeholder="Enter your email"
            fullWidth
          />

          <FormLabel>Your contact</FormLabel>
          <TextField
            size="small"
            type="tel"
            placeholder="Enter your phone number"
            fullWidth
          />
        </Box>

        <Button variant="contained" color="primary" sx={{ mt: 1 }} fullWidth>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
