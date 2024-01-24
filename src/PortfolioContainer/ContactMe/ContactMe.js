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
              <h1 style={{ color: "white", cursor: "pointer" }}>
                alihinnawe.jobs@gmail.com
              </h1>
            </a>
            <img src={imgBack} alt="image not found" />
          </div>
          <form>
            <Typical
              loop={Infinity}
              steps={[
                "Ready to make my inbox do the happy dance? Click on the email - my form is still rocking the PJs! 📧 😎",
                1000,
              ]}
            />
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}
