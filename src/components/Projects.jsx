import React from "react";
import { BsYoutube, BsGithub } from "react-icons/bs";
import css from "./css/projects.module.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

// import fotoftofot from "./img/nombredefotooo"
// import fotoftofot from "./img/nombredefotooo"
// import fotoftofot from "./img/nombredefotooo"

function Projects() {
  return (
    <div className={css.Projects_Container}>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className={css.projects}>
          <h1>My main Proyects</h1>
          <div className={css.cards}>
            <div className={css.card}>
              <img className={css.img} src="fotooo" alt="" />
              <div className={css.text}>
                <h1>nombree</h1>
                <div className={css.link}>
                  <a className={css.git_btn} href="githubbb">
                    <BsGithub />
                  </a>
                  <a className={css.yt_btn} href="youtbutee">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>

            <div className={css.card}>
              <img className={css.img} src="fotooo" alt="" />
              <div className={css.text}>
                <h1>nombree</h1>
                <div className={css.link}>
                  <a className={css.git_btn} href="githubbb">
                    <BsGithub />
                  </a>
                  <a className={css.yt_btn} href="youtbutee">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>

            <div className={css.card}>
              <img className={css.img} src="fotooo" alt="" />
              <div className={css.text}>
                <h1>nombree</h1>
                <div className={css.link}>
                  <a className={css.git_btn} href="githubbb">
                    <BsGithub />
                  </a>
                  <a className={css.yt_btn} href="youtbutee">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Projects;
