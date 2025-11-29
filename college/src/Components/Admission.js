import React from "react";
import { Box, Typography, Paper, Grid, CardContent, Card } from "@mui/material";
import admissionImg from "../Assets/admission.jpg";

const Admission = () => {
  return (
    <Box sx={{ width: "100%" }}>
      
      {/* Banner Section */}
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `url(${admissionImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          flexDirection: "column",
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
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            mb: 2,
          }}
        >
          Admission of Colleges
        </Typography>

        <Typography
          variant="h6"
          sx={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
        >
          Best College leads to a bright future..
        </Typography>
      </Box>

      {/* Centered Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: 2,
          mb: 4,
          px: 1,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            width: "100%", 
            textAlign: "center", 
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Get Admission in the Best PU Colleges
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            “Get admission in the best PU college where academic excellence, 
            experienced faculty, state-of-the-art facilities, and a supportive 
            learning environment come together to help students discover their 
            potential, build strong career foundations, and achieve outstanding 
            success in their future educational journey.”
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Choose from top institutes offering Science, Commerce, and Arts 
            streams with comprehensive academic support, modern classrooms, 
            sports, extracurricular activities, and career guidance to ensure 
            students get the best start in their educational journey.
          </Typography>
 
<Box sx={{ px: 2, mb: 2, mt: 4 }}>
  <Grid container spacing={4} justifyContent="center">

    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
        display:"flex",width:350,  
         alignItems:"center",
          justifyContent: "center",
          borderRadius: 3,
          backgroundColor: "#fff6e5",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Science
          </Typography>
        </CardContent>
      </Card>
    </Grid>

  
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
         display:"flex",width:350,  
         alignItems:"center",
          justifyContent: "center",
          borderRadius: 3,
          backgroundColor: "#fff6e5",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Commerce
          </Typography>
        </CardContent>
      </Card>
    </Grid>


    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
        display:"flex",width:350,  
         alignItems:"center",
          justifyContent: "center",
          borderRadius: 3,
          backgroundColor: "#fff6e5",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Arts
          </Typography>
        </CardContent>
      </Card>
    </Grid>

  </Grid>
</Box>


      </Paper>
      </Box>
    </Box>
  );
};

export default Admission;

