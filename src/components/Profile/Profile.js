import React from 'react';
import { Typography } from '@mui/material';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import './Profile.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import resumeData from '../../utils/resumeData';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import GetAppIcon from '@mui/icons-material/GetApp';
import profileImage from '../../assets/Swati_Pic.png.jpg'; // Import the image

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {" "}
          <a href={link} target='_blank' rel='noopener noreferrer'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={profileImage} alt="Profile" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Birthday" text={resumeData.birthday} />
          <CustomTimelineItem title="Address" text={resumeData.address} />
          <CustomTimelineItem title="Contact No." text={resumeData.phone} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.social).map((key) => (
            <CustomTimelineItem 
              key={key}
              title={key} 
              text={resumeData.social[key].text} 
              link={resumeData.social[key].link}
            />
          ))}
        </CustomTimeline>
        
        <div className="button_containter" style={{display:'flex'}}>
        <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
      </div>
    </div>
    </div> 
  );
};

export default Profile;
