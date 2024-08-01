import React from "react";
import { Typography } from '@mui/material';
import "./Footer.css";

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">Swati Gupta</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright"> 
          Designed & Developed by {" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            Swati Gupta
          </a>
          <br/>
          Clone idea from {" "}
          <a href="https://themeforest.net/user/tavonline" target="_blank" rel="noopener noreferrer">Tavonline</a>.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
