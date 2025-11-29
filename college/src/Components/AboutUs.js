import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import aboutImg from "../Assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage:`url(${aboutImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        p: 0,
        m: 0,
      }}
    >

      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          bgcolor: "rgba(0,0,0,0.55)", 
          backdropFilter: "blur(2px)",
          p: 0,
          m: 0,
        }}
      >
        
      
        <Box
          sx={{
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 3,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "white",
              textShadow: "3px 3px 10px rgba(0,0,0,0.9)",
            }}
          >
            About Us
          </Typography>
        </Box>

      
        <Container maxWidth="lg" sx={{ pb: 8 }}>
          
          <Grid container spacing={4}>

         
            <Grid item xs={12} md={6}>
              <Paper elevation={6} 
                sx={{ 
                  p: 4, 
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.85)",
                }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  Our mission is to provide holistic education that builds character,
                  confidence, and competence. We empower students to excel in academics
                  and grow as responsible individuals.
                </Typography>
              </Paper>
            </Grid>

          
            <Grid item xs={12} md={6}>
              <Paper elevation={6} 
                sx={{ 
                  p: 4, 
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.85)",
                }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  To shape future leaders through value-driven education, innovative
                  thinking, and comprehensive learning experiences. 
                  To create a transformative learning environment that promotes innovation, leadership, and holistic development.
                </Typography>
              </Paper>
            </Grid>

          </Grid>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mt: 6,
              mb: 3,
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 8px black",
            }}
          >
            Why Choose Us?
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Academic Excellence with Expert Faculty",
                desc: "We offer a rigorous PU curriculum delivered by highly qualified and experienced lecturers who ensure every student receives conceptual clarity, exam-focused preparation, and personalized mentoring.",
              },
              {
                title: "Modern Infrastructure",
                desc: "Our campus includes well-equipped science labs, digital classrooms, a comprehensive library, and dedicated student study zones, creating an environment that supports active learning and growth.",
              },
              {
                title: "Co-Curricular Growth",
                desc: "From sports and cultural activities to leadership clubs and value-based programs, we focus on overall development to help students build confidence, teamwork, and essential life skills.",
              },
              {
                title: "Strong Results & Proven Track Record",
                desc: "With consistently high board exam results, competitive exam achievers, and successful alumni, we stand as one of Bangalore’s trusted PU institutions committed to student success.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.85)",
                    "&:hover": {
                      boxShadow: 10,
                      transform: "translateY(-4px)",
                      transition: "0.3s",
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

        </Container>

      </Box>
    </Box>
  );
};

export default AboutUs;