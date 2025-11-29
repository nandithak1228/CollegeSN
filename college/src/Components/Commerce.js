import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import commerceImg from "../Assets/commerce.jpg"; 

const Commerce = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#f4fff7", pb: 6 }}>
 
      <Box
        sx={{
          height: "60vh",
          backgroundImage: `url(${commerceImg})`,
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
          Commerce Stream (CEBA / SEBA / HEBA)
        </Typography>
      </Box>

    
      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 5, px: 3 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#04652d" }}>
            Why Choose Commerce Stream?
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "18px" }}>
            Commerce is the perfect choice for students interested in business, finance,
            economics, management, and entrepreneurship. This stream builds logical 
            thinking, financial literacy, and analytical skills that prepare students 
            for careers in Banking, CA, CS, Marketing, Business Management, and more.
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#04652d" }}>
          Commerce Course Combinations
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: "CEBA",
              subjects: ["Computer Science", "Economics", "Business Studies", "Accountancy"],
            },
            {
              title: "SEBA",
              subjects: ["Statistics", "Economics", "Business Studies", "Accountancy"],
            },
            {
              title: "HEBA",
              subjects: ["History", "Economics", "Business Studies", "Accountancy"],
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
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0c8f41", mb: 1 }}>
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
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#04652d" }}>
          Key Benefits of Choosing Commerce
        </Typography>

        <Grid container spacing={4}>
          {[
            "Gateway to CA, CS, CMA, BBA, B.Com, MBA and other top careers.",
            "Understanding of finance, business, taxation, and management.",
            "Large number of job opportunities in private & government sectors.",
            "Best stream for Business, Entrepreneurship, and Start-ups.",
            "Strong foundation for competitive exams like Banking, UPSC, KAS.",
          ].map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#e9fff0",
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
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#04652d" }}>
          Career Opportunities After Commerce
        </Typography>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          {[
            "Chartered Accountant (CA)",
            "Company Secretary (CS)",
            "Banking & Finance Professional",
            "Business Analyst / Marketing Manager",
            "Accountant / Tax Consultant",
            "Entrepreneur / Business Owner",
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

export default Commerce;
