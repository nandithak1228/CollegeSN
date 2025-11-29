import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import artsImg from "../Assets/arts.png"; 

const Arts = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#ebe8e2ff", pb: 6 }}>
 
      <Box
        sx={{
          height: "60vh",
          backgroundImage: `url(${artsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textShadow: "3px 3px 10px rgba(0,0,0,0.7)",
          }}
        >
          Arts Stream (HEPS / HELG / EPSP)
        </Typography>
      </Box>

    
      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 5, px: 3 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#650456ff" }}>
            Why Choose Arts Stream?
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "18px" }}>
            Choosing the arts stream offers a unique set of benefits focused on developing a deep understanding of human society, culture, and communication, along with versatile skills that are highly valued in a wide range of careers.
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#650456ff" }}>
          Arts Course Combinations
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: "HEPS",
              subjects: ["History", "Economics", "Political Science", "Sociology"],
            },
            {
              title: "HELG",
              subjects: ["History", "Economics", "Logic", "Geography"],
            },
            {
              title: "EPSP",
              subjects: ["Economics", "Political Science", "Sociology", "Psychology"],
            },
          ].map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#8f0c8bff", mb: 1 }}>
                  {course.title}
                </Typography>

                {course.subjects.map((sub, idx) => (
                  <Typography key={idx} variant="body1">
                    • {sub}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#650460ff" }}>
          Key Benefits of Choosing Arts
        </Typography>

        <Grid container spacing={4}>
          {[
            "Develops strong critical thinking and analytical problem-solving skills.",
"Cultivates excellent written and verbal communication abilities.",
"Fosters creativity, innovation, and adaptable thinking.",
"Promotes cultural awareness, empathy, and a global perspective.",
"Provides a flexible foundation for diverse careers in media, law, design, and public service.",
          ].map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#ffe9fdff",
                  minHeight: "120px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" sx={{ fontSize: "17px" }}>
                  ✔ {benefit}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

 
      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6, px: 3, mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#650458ff" }}>
          Career Opportunities After 
        </Typography>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          {[
            "Civil Services (IAS, IPS, IFS Officer)",
            "Corporate Lawyer / Legal Advisor",
            "Journalist / Media Professional",
            "Psychologist / Counselor",
            "Accountant / Tax Consultant",
            "Graphic Designer / UI/UX Designer",
          ].map((career, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 1.2, fontSize: "18px" }}>
              • {career}
            </Typography>
          ))}
        </Paper>
      </Box>
    </Box>
  );
};

export default Arts;
