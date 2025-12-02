import React from "react";
import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  Box,
  Button,
  Link,
} from "@mui/material";

import Type from './Type.js';

import Clg1 from "../Assets/clg1.jpg";
import Clg2 from "../Assets/clg2.jpg";
import Clg3 from "../Assets/clg3.jpg";
import Clg4 from "../Assets/clg4.webp";
import Clg5 from "../Assets/clg5.jpg";
import Clg6 from "../Assets/clg6.jpg";
import Clg7 from "../Assets/clg7.jpg";
import Clg8 from "../Assets/clg8.jpg";
import Clg9 from "../Assets/clg9.jpg";
import Clg10 from "../Assets/clg10.jpg";

const images = [
  {
    link: "https://www.getmycollege.com/college/bangalore/national-pu-college",
    src: Clg1,
    alt: "National PU College",
    text: "Modern labs & high board results",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/st-joseph-pu-college",
    src: Clg2,
    alt: "St. Joseph PU College",
    text: "NEET & JEE coaching",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/christ-pu-college",
    src: Clg3,
    alt: "Christ PU College",
    text: "Research & smart classrooms",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/mount-carmel-pu-college",
    src: Clg4,
    alt: "Mount Carmel PU College",
    text: "Professional skill development",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/jyoti-nivas-pu-college",
    src: Clg5,
    alt: "Jyoti Nivas PU College",
    text: "Holistic learning & activities",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/mes-pu-college",
    src: Clg6,
    alt: "MES PU College",
    text: "Internship & career guidance",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/bishop-cotton-pu-college",
    src: Clg7,
    alt: "Bishop Cotton PU College",
    text: "Experienced faculty & labs",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/vijaya-pu-college",
    src: Clg8,
    alt: "Vijaya PU College",
    text: "Exam preparation & extracurriculars",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/garden-city-pu-college",
    src: Clg9,
    alt: "Garden City PU College",
    text: "Balanced academics & activities",
  },
  {
    link: "https://www.getmycollege.com/college/bangalore/dayananda-pu-college",
    src: Clg10,
    alt: "Dayananda PU College",
    text: "Accountancy & finance focus",
  },
];


const CollegeCardGrid = () => {
  return (
    <Card sx={{  backgroundImage: `linear-gradient(135deg, #a5dbb6ff 10%, #FC467B 100%)`,backgroundSize:"cover"}}>
     <Type/>
      <CardActionArea >
        <Grid container spacing={1} padding={1}>
          {images.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  bgcolor: "rgba(236, 242, 244, 1)",
                  boxShadow: "rgba(38, 37, 33, 0.2) 2px 0px 3px",
                  p: 3,
                  borderRadius: 3,
                  transition: "box-shadow 0.3s ease",
                  ":hover": {
                    boxShadow: "rgba(38, 37, 33, 0.5) 4px 4px 12px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt}
                  height={200}
                  width={300}
                  style={{
                    borderRadius: 8,
                    boxShadow: "rgba(29, 29, 28, 0.2) 2px 0px 8px",
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 3,
                    fontFamily: "Georgia, serif",
                  }}
                  mt={1}
                >
                  {item.text}
                  <Button
                    component={Link}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{
                      bgcolor: "primary.main",
                    
                      fontSize: "1em",
                      size: "small",
                      color: "white",
                      fontFamily: "serif",
                      p: 0,
                      textShadow: "rgba(20, 19, 19, 0.27) 2px 0px 1px",
                      ":hover": {
                        bgcolor: "white",
                        color: "black",
                        fontFamily: "fantasy",
                      },
                    }}
                  >
                    Know more
                  </Button>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default CollegeCardGrid;