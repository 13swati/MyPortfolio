import React, { useState } from "react";
import "./Portfolio.css";
import { Grid, Tabs, Tab } from "@mui/material";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("---");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      <Grid item>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          className="custom_tabs"
          onChange={handleTabChange}
        >
          <Tab label="Coming soon...." value="Coming soon...." />
  </Tabs>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
