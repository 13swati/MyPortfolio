import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import './Resume.css';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import SchoolIcon from '@mui/icons-material/School';
import TimelineDot from '@mui/lab/TimelineDot';

const Resume = () => {
  if (!resumeData) {
    return <div>Loading...</div>; // Render a loading state if resumeData is not yet available
  }

  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="about_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            {/* Education Timeline */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education History" icon={<SchoolIcon />}>
                {resumeData.educations && resumeData.educations.map((education, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_schoolName">
                        {education.SchoolName}
                      </Typography>
                      <Typography variant="body2" className="timeline_passingYear">
                        {education.PassingYear}
                      </Typography>
                      <Typography variant="body2" className="timeline_board">
                        {education.Board}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container spacing={3} className="section graybg pb_45">
        {resumeData.skills && resumeData.skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={0} className="skill">
              <Typography variant="h6" className="skill_title">
                {skill.title}
              </Typography>
              {skill.description && skill.description.map((element, idx) => (
                <Typography key={idx} className="skill_description">
                  <TimelineDot className="timeline_dot" />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Resume;
