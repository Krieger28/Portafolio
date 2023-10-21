import React from "react";
import { BsYoutube, BsGithub } from "react-icons/bs";
import css from "./css/projects.module.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import pkdxpng from "./img/pkdxpng.png"
import notespng from "./img/NOTESPNG.png"
import wallabypng from "./img/wallabypng.png"

function Projects() {
  return (
    <div className={css.Projects_Container}>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className={css.projects}>
          <h1>My main Proyects</h1>
          <div className={css.cards}>
            <div className={css.card}>
              <img className={css.img} src={wallabypng} alt="altt" />
              <div className={css.text}>
                <h1>NFT Marketplace</h1>
                <div className={css.link}>
                  <a className={css.git_btn} href="https://github.com/Krieger28/WallabyApp-Frontend">
                    <BsGithub />
                  </a>
                  <a className={css.yt_btn} href="https://www.youtube.com/watch?v=goCWOetsbH0&ab_channel=MaximilianoGiraudo">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>

            <div className={css.card}>
              <img className={css.img} src={pkdxpng} alt="aaa" />
              <div className={css.text}>
                <h1>Pokedex App</h1>
                <div className={css.link}>
                  <a className={css.git_btn} href="https://github.com/Krieger28/PI-Pokemon">
                    <BsGithub />
                  </a>
                  <a className={css.yt_btn} href="https://youtu.be/SPo36GL_3YU">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>

            <div className={css.card}>
              <img className={css.img} src={notespng} alt="aaaa" />
              <div className={css.text}>
                <h1>Notes App</h1>
                <div className={css.link}>
                  <a className={css.git_btn} href="https://github.com/Krieger28/NotesApp">
                    <BsGithub />
                  </a>
                  <a className={css.yt_btn} href="https://youtu.be/3spXpE_Kt3g">
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
