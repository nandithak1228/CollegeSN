import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Type = () => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorBlink, setCursorBlink] = useState(true);
  
  const fullQuote = "Your education is a dress rehearsal for a life that is yours to lead";

  
  useEffect(() => {
    let timer;
    
    if (!isDeleting) {
      
      if (charIndex < fullQuote.length) {
        timer = setTimeout(() => {
          setDisplayText(fullQuote.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100); 
      } else {
       
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); 
      }
    } else {
      
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullQuote.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50); 
      } else {
       
        setIsDeleting(false);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimer);
  }, []);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontStyle: "italic",
          marginTop: 2,mb:2,
          fontWeight: "bold",
          letterSpacing: 1,
          background: "radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontFamily: '"Georgia", serif',
          WebkitTextStroke: "0.5px black",
          zIndex: 3,
          opacity: 1,
          textAlign: "center",
          mt: 2,
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderRight: cursorBlink ? "2px solid rgba(255,255,255,0.8)" : "2px solid transparent",
        }}
      >
        {displayText}
        {(charIndex < fullQuote.length || isDeleting) && <span>|</span>}
      </Typography>
    
    </Box>
  );
};

export default Type;