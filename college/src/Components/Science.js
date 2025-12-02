import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import scienceImg from "../Assets/science.jpg";

const Science = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#f5f7ff", pb: 6 }}>
      
    
      <Box
        sx={{
          height: "60vh",
          backgroundImage: `url(${scienceImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#d8e7f5ff",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textShadow: "3px 3px 10px rgba(5, 23, 34, 0.7)",
          }}
        >
          Science Stream (PCMB / PCMC / PCME)
        </Typography>
      </Box>

      {/* Intro Section */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 5, px: 3 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#001b88" }}>
            Why Choose Science Stream?
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "18px" }}>
            The Science stream opens the door to a world full of innovation, research, 
            technology, and endless opportunities. It is the ideal choice for students who 
            are curious, analytical, and passionate about understanding how things work. 
            Pursuing Science at the PU level builds a strong foundation for top professional 
            careers in Engineering, Medicine, Research, Biotechnology, Aviation, Data Science, 
            and many more emerging fields.
          </Typography>
        </Paper>
      </Box>

      {/* Courses Offered */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#001b88" }}>
          Science Course Combinations
        </Typography>

        <Grid container spacing={4}>
          
          {[
            {
              title: "PCMB",
              subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
            },
            {
              title: "PCMC",
              subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
            },
            {
              title: "PCME",
              subjects: ["Physics", "Chemistry", "Mathematics", "Electronics"],
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
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0032ba", mb: 1 }}>
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

      {/* Benefits Section */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#001b88" }}>
          Key Benefits of Choosing Science
        </Typography>

        <Grid container spacing={4}>
          {[
            "Opens pathways to NEET, JEE, KCET, and other competitive exams.",
            "Offers wide career opportunities in Medicine, Engineering, Research, and Technology.",
            "Develops strong analytical and problem-solving skills.",
            "High demand fields like AI, Robotics, Biotechnology, IT, and Space Science.",
            "Flexibility to move into Commerce or Arts later if needed.",
          ].map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#eef2ff",
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

      {/* Career Opportunities */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6, px: 3, mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#001b88" }}>
          Popular Career Paths After Science
        </Typography>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          {[
            "Doctor, Surgeon, Dentist, Pharmacist (Medical Field)",
            "Software Engineer, Data Scientist, Cyber Security Expert",
            "Mechanical, Civil, Electrical, Aerospace Engineer",
            "Biotechnologist, Microbiologist, Genetic Scientist",
            "Architect, Pilot, Research Scientist, Astronomer",
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

export default Science;
