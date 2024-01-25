import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "TypeScript", ratingPercentage: 50 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 55 },
    { skill: "Node JS", ratingPercentage: 50 },
    { skill: "Mongo Db", ratingPercentage: 50 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "portfolio-react ",
      duration: { fromDate: "12.2023", toDate: "01.2024" },
      description: "Building my portfolio with React",
      subHeading: "Technologies Used:  HTML, CSS, React",
    },
    {
      title: "AID-LINGUA-AI-NEWS ",
      duration: { fromDate: "8.2023", toDate: "9.2023" },
      description:
        "A user-friendly web application for the AID-LINGUA-AI-NEWS newsletter, catering to individuals with accessibility needs.",
      subHeading: "Technologies Used:  React , Mongo DB, Node Js",
    },
    // {
    //   title: "Rick and Morty App",
    //   duration: { fromDate: "7. 2023", toDate: "8. 2023" },
    //   description:
    //     " Create a single page app for browsing all the characters of the famous tv show Rick and Morty",
    //   subHeading: "Technologies Used:  HTML, CSS, JavaScript, React",
    // },
    {
      title: "Weather & Activities App",
      duration: { fromDate: "8.2023", toDate: "8.2023" },
      description:
        "An app that fetches a weather object from an API and conditionally picks activities from a list to display as suggestions",
      subHeading: "Technologies Used:  HTML, CSS, JavaScript",
    },

    {
      title: "Tourio App",
      duration: { fromDate: "6. 2023", toDate: "7. 2023" },
      description:
        " The best friend of all travelers: it displays sights you want to visit and lets you edit them.",
      subHeading: "Technologies Used:  HTML, CSS, JavaScript",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Full-Stack Web Development Bootcamp, Spiced Academy"}
        subHeading={"12-week intensive Full Stack Web Development Bootcamp"}
        fromDate={"2023"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Masterstudium an der Universität Potsdam"}
        subHeading={
          "Master of Science in Cognitive Systems:Language, Learning and Reasoning"
        }
        fromDate={"2017"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Bachelorstudium an der Arab Open University"}
        subHeading={
          "Bachelor of Science in Information Technology and Computing"
        }
        fromDate={"2005"}
        toDate={"2009"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Esiters, Lebanon"}
          subHeading={
            "System Administrator und Teamleiter am Hafen von Beirut, Lebanon"
          }
          fromDate={"2010"}
          toDate={"2015"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Das Anlegen und die Verarbeitung von Stammdaten, Aufrechterhaltung
            der System Qualitätssicherung, Fehlersuche bei Systemproblemen,
            Erstellen von Workflow Diagrammen für ausgehandelte
            Rahmenbedingungen.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="I have a keen interest in sports, particularly enjoying the invigorating activity of running.."
      />
      <ResumeHeading
        heading="Reading AI books"
        description="I avidly explore my passion for technology by delving into AI and web development through reading relevant books."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
