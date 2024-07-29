import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';

const resumeData = {
  name: 'Swati Gupta',
  title: 'IT Developer',
  birthday: '13th September 2004',
  email: 'swatigupta11330@gmail.com',
  address: 'Shiva Krupa Nivas, Haripur Road, Sangli',
  phone: '8830545415',
  social: {
    Github: {
      link: 'https://github.com/13swati',
      text: 'My Github',
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/abc',
      text: 'My LinkedIn',
      icon: <LinkedInIcon />,
    },
    Netlify: {
      link: 'https://app.netlify.com/teams/13swati/overview',
      text: 'My Netlify',
      icon: <PersonIcon />,
    },
  },
  about: "I am a passionate and enthusiastic student specializing in Information Technology. With a strong foundation in programming, problem-solving, and an eagerness to learn, I am driven by a curiosity for technology and its potential to transform the world. In my academic journey so far, I have gained practical experience in coding languages such as C & C++ and have developed a keen interest in web development. I am constantly exploring new technologies and tools to enhance my skill set and stay updated with industry trends. I am seeking opportunities to apply my skills in real-world scenarios, contribute to meaningful projects, and grow as a professional in the field of IT. I am excited to embark on this journey and make a positive impact through technology.",
  educations: [
    {
      title: "SSC",
      SchoolName: "Emmanuel English School",
      PassingYear: "2021",
      Board: "State Board",
    },
    {
      title: "HSC",
      SchoolName: "L.G.R Kanya Purohit,Sangli",
      PassingYear: "2023",
      Board: "State Board",
    },
    {
      title: "Graduation",
      SchoolName: "Government College Of Engineering,Karad",
      PassingYear: "2027(Expected)",
      Board: "Shivaji University",
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      description: ["C", "C++", "Python"]
    },
    
    {
      title: "Tools & Technologies",
      description: [ "GitHub", "Netlify"]
    }
  ],
  
};

export default resumeData;
