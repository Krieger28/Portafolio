import React from "react";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import {
  DiMongodb,
  DiPostgresql,
  DiFirebase,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux, SiTypescript, SiAuth0 } from "react-icons/si";
import Html from "./img/Html.svg";
import Ivan_Koch_en from "./img/Ivan Koch en.pdf";
import css from "./css/aboutMe.module.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutMe() {
  return (
    <div className={css.AboutmeContainer}>
      <div className={css.Aboutme}>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1 className={css.AboutmeText}>About me:</h1>
          <p className={css.Aboutmep}>I am a young man very fond of technology in general, always trying to
          deliver the best quality product by constantly increasing my
          professional and personal knowledge.
          <br />I started in the world of programming because since I was a
          child i've been in love with computers and videogames so i got
          interested in knowing how a videogame is created and hope in the
          future to be able to work in that industry.</p>
          
          <div className={css.btn}>
            {/* CAMBIAR POR EL CURRICULUM TERMINADO CUANDO WESTE TERMINADO */}
            <a
              href={`https://drive.google.com/file/d/1EaiLN8yvpx9o0JKW9mj9wMzG4vmMv-DW/view?usp=share_link`}
            >
              <button className={css.buttons}>Open CV</button>
            </a>
            <a href={Ivan_Koch_en} download="CV-IvanKoch.pdf">
              <button className={css.buttons}>Download CV</button>
            </a>
          </div>
        </AnimationOnScroll>

        <div className={css.aboutmeContainerSkills}>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <h1>Abilities:</h1>
            <div>
              <ul className={css.skills}>
                <li className={css.js}>
                  {" "}
                  <IoLogoJavascript /> JavaScript
                </li>
                <li className={css.react}>
                  {" "}
                  <IoLogoReact /> React
                </li>
                <li className={css.node}>
                  {" "}
                  <IoLogoNodejs /> NodeJS
                </li>
                <li className={css.mongo}>
                  {" "}
                  <DiMongodb /> MongoDB
                </li>
                <li className={css.sql}>
                  {" "}
                  <DiPostgresql /> SQL
                </li>
                <li className={css.ts}>
                  {" "}
                  <SiTypescript /> TypeScript
                </li>
                <li className={css.css}>
                  {" "}
                  <DiCss3 /> CSS
                </li>
                <li className={css.redux}>
                  {" "}
                  <SiRedux /> Redux
                </li>
                <li className={css.fb}>
                  {" "}
                  <DiFirebase /> Firebase
                </li>
                <li className={css.auth0}>
                  {" "}
                  <SiAuth0 /> Auth0
                </li>
                <li className={css.html}>
                  {" "}
                  <DiHtml5 /> HTML
                </li>
                <li className={css.btstrp}>
                  {" "}
                  <FaBootstrap /> BootStrap
                </li>
              </ul>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <img className={css.img} src={Html} alt="img_html" />
    </div>
  );
}

export default AboutMe;
