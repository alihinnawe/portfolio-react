import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
        </div>
        <div className="back-form">
          <div className="img-back">
            <a
              href="mailto:alihinnawe.jobs@gmail.com"
              style={{ color: "white", textDecoration: "none" }}
            >
              <h2 style={{ color: "white", cursor: "pointer" }}>
                alihinnawe.jobs@gmail.com
              </h2>
            </a>
            {/* <img src={imgBack} alt="image not found" /> */}
          </div>
          {/* <h3 style={{ color: "white", cursor: "pointer" }}>
            Attention: My email form is currently taking a nap in its
            construction zone! 😴🚧 But fear not, you can still reach me by
            clicking the email. 📧 😎
          </h3> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
