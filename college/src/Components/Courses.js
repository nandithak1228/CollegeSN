import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import bgImg from "C:/Users/Other/Desktop/SNProject/college/src/Assets/courses.jpg"

const courses = [
  {
    stream: "Science (PCMB / PCMC / PCME)",
    color: "#010f5aff",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "Electronics"],
  },
  {
    stream: "Commerce (CEBA / SEBA / HEBA)",
    color: "#03591dff",
    subjects: ["Accountancy", "Business Studies", "Economics", "Statistics", "History"],
  },
  {
    stream: "Arts (HEPS / HEPP / HESP)",
    color: "#680526ff",
    subjects: ["History", "Economics", "Political Science", "Sociology", "Psychology", "Optional Kannada"],
  },
];

const Courses = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        py: 6,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2}}>
        
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "#fff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          Courses Offered
        </Typography>

        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            px: 3,
            justifyContent:"center",
            gap: 3,
            pb: 2,
            scrollbarWidth: "thin",
          }}
        >
          {courses.map((course, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                minWidth: "320px",
                p: 3,
                borderRadius: 3,
                display: "inline-block",
                whiteSpace: "normal",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(5px)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: course.color,
                  textAlign: "center",
                }}
              >
                {course.stream}
              </Typography>

              {course.subjects.map((sub, idx) => (
                <Typography key={idx} variant="body1" sx={{ mb: 0.6 }}>
                  • {sub}
                </Typography>
              ))}
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
