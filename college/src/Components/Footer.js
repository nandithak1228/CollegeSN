import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X'; // Twitter rebranded to X

const socialLink = [
  { link: "https://linkedin.com/company/getmycollege", icon: LinkedInIcon, alt: "LinkedIn" },
  { link: "https://facebook.com/getmycollege", icon: FacebookIcon, alt: "Facebook" },
  { link: "https://www.instagram.com/getmycollege/", icon: InstagramIcon, alt: "Instagram" },
  { link: "https://youtube.com/@getmycollege", icon: YouTubeIcon, alt: "YouTube" },
  { link: "https://x.com/getmycollege", icon: XIcon, alt: "Twitter" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        py: 2,
        px: 3,
        height: {xs:"1rem",md:"2rem"},
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        mt:0
      }}
    >
      {/* Follow us Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
            fontSize: {xs:"0.8rem",md:"1rem"},
          }}
        >
          Follow us:
        </Typography>
        <Box sx={{ display: "flex", gap: 1}}>
          {socialLink.map((item, idx) => (
            <IconButton
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "rgba(255,255,255,0.15)",
                color: "white",
                width: 44,
                height: 44,
                borderRadius: "50%",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "secondary.main",
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 12px rgba(255,255,255,0.3)",
                },
              }}
            >
              <item.icon sx={{ fontSize: "1.4rem" }} />
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Copyright */}
      <Box textAlign={{ xs: "center", sm: "right" }}>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.9)",
            fontWeight: 500,
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            lineHeight: 1.4,
          }}
        >
          © 2025 Bangalore PU Colleges developed by Nanditha.K. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
