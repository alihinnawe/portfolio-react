import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description: `An enthusiastic and dedicated beginner venturing into the world of web development. My journey is fueled by a passion for creating impactful web applications using HTML,CSS and JS. 
    I ventured to Germany for a Master's in data science, immersing myself in natural language processing and machine learning, and honing
      my skills in Python. My dedication to web development lead me to enroll in a Bootcamp at
      Spiced Academy Berlin.`,
    highlights: {
      bullets: [
        `During an intensive Bootcamp, I significantly expanded my proficiency in HTML, CSS, JavaScript, React and
        related frameworks such as Next.js and Node.js. Venturing into the realm of databases, I learned
        MongoDB and Mongoose, simultaneously acquiring expertise in Git, GitHub, and various development tools. Currently, I am deepening my understanding of TypeScript and planning to explore Angular
        and Framer Motion, driven by an unwavering commitment to evolving with the dynamic industry landscape.`,
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        {/* <div className="highlight-blob"></div> */}
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="Lebenslauf_Ali_Hinnawe.pdf"
                download="Hinnawe Lebenslauf_Ali_Hinnawe.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
