import React from "react";
import { BsGithub, BsLinkedin, } from "react-icons/bs";
import 'animate.css';
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Modalll from "./modal";
import Form from "./form";
import css from "./css/home.module.css"
import Wave from 'react-wavify';

function Home() {

  
  return (
    <div className={css.home_container}>
      
      <div className={css.Home}>
      <h1 className="animate__animated animate__backInDown"> Hey, <span className={css.spanname}>I'm Ivan Koch </span> </h1>
      <h2>A Fullstack Web Developer</h2>
      <div className={css.Tecnologies}>
      <ul>
        <li > <a href="https://github.com/Krieger28"> <BsGithub className={css.icon_git}/> </a> </li>
        <li> <a href="https://www.linkedin.com/in/ivan-koch-developer/"> <BsLinkedin className={css.icon_in}/> </a> </li>
        <li> <Modalll/> </li>
        <li> <Form/> </li>
      </ul>
      </div>

      <Wave className={css.wave} fill='#a52222'
        paused={false}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.15,
          points: 3
        }}
  />
      <AboutMe/>
      <Projects/>
      </div>
    </div>
  );
}

export default Home;
