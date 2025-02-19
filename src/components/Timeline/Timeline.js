import React from 'react';
import './Timeline.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import WorkIcon from '@mui/icons-material/Work';
import { Typography } from '@mui/material';
// import { Bolt } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className='timeline'>
      {/* Item header */}
      <TimelineItem className='timeline_firstitem'>
        <TimelineSeparator>
          <TimelineDot className='timeline_dot_header'>
            <PersonOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className='timeline_header'>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className='seperator_padding'>
      <TimelineDot variant={"outlined"} className='timeline_dot' />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeline;