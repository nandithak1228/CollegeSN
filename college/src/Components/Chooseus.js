import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import bgImg from "C:/Users/Other/Desktop/SNProject/college/src/Assets/bgI.jpg";

const paragraph = [
  {
    first: "Comprehensive Information",
    second: "We provide detailed insights into the best Pre-University colleges in Bangalore, helping students make informed decisions",
  },
  {
    first: "Expert Guidance",
    second: "Our platform offers curated advice and recommendations to match student preferences and career goals",
  },
  {
    first: "User-Friendly Interface",
    second: "Easily compare colleges based on facilities, courses, faculty, and extracurricular activities.",
  },
];

const Chooseus = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        m: 0,
        p: 3,
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        mt:0,
      }}
    >
      {/* Why Choose Us - Centered Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "70%", md: "50%" },
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: 800,
            mb: 2,
            fontFamily: "serif",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            letterSpacing: 1,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Why Choose Us
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: { xs: "8rem", sm: "12rem", md: "15rem" },
            height: { xs: "3rem", md: "3.5rem" },
            bgcolor: "secondary.main",
            color: "white",
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontWeight: 600,
            borderRadius: 50,
            border: "3px solid rgba(59, 16, 53, 0.3)",
            boxShadow: "0 14px 20px rgba(59, 16, 53, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "secondary.dark",
              transform: "translateY(-2px)",
              boxShadow: "0 12px 40px rgba(89, 71, 71, 0.4)",
              borderColor: "rgba(59, 16, 53, 0.6)",
            },
          }}
        >
          Explore more
        </Button>
      </Box>

      {/* Cards Grid - Bottom Aligned */}
      <Box
        sx={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          display: "flex",
          justifyContent: "center",
       
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {paragraph.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                sx={{
                  height: { xs: "10rem", sm: "12rem", md: "14rem" },
                  width: { xs: "12rem", sm: "16rem", md: "18rem" },
                  borderRadius: 8,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "rgba(255,255,255,0.95)",
                  boxShadow: "rgba(16, 15, 15, 1) 10px 8px 0px",
                  transition: "all 0.5s ease-out",
                  "&:hover": {
                    transform: "scale(1.07)",
                    boxShadow: "rgba(16, 15, 15, 1) 15px 12px 0px",
                  },
                  mx: "auto",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontFamily: "serif",
                    color: "primary.dark",
                    mb: 1,
                    fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
                    textAlign: "center",
                  }}
                >
                  {item.first}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" },
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {item.second}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Chooseus;
