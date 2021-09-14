// Step 1: Import React
import * as React from 'react'
import { useEffect } from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import AboutSection from '../components/about'
import ProjectsSection from '../components/projects'
import ContactSection from '../components/contact'
import $ from 'jquery';
import {
    homeIntro,
    homeDescription,
    introduction,
    circle1,
    circle2,
    circle3,
    randomCircle1,
    randomCircle2,
} from '../components/layout.module.css'
import {
    highlight,
} from '../components/sections.module.css'

function randomValue() {
    return Math.floor(Math.random() * 101);
}

const IndexPage = () => {
  useEffect(() => {
      $(document).mousemove(function (event) {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        var mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
        var mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

        document.getElementById("circles").style.top = mouseXpercentage + "%";
        document.getElementById("circles").style.left = mouseYpercentage + "%";
      });
  });

  const values = [randomValue(), randomValue(), randomValue(), randomValue(), randomValue()];
  console.log(values);

  return (
      <Layout pageTitle="Home Page">
        <div id="title" className={introduction}>
            <div className={circle1} id="circles"></div>
            <div className={circle2} id="circles"></div>
            <div className={circle3} id="circles"></div>
            <p className={homeIntro}>Hello, <br/> I am Yumin Jeong</p>
            <p className={homeDescription}>I'm a recent graduate with a passion for
            <br/><span className={highlight}>computer science👩‍💻</span> and <span className={highlight}>art🌻</span> who is seeking
            <br/>job opportunities as a front-end engineer.</p>
        </div>

        <div id="aboutMe" style={{position: "relative", overflow: "hidden"}}>
            <AboutSection></AboutSection>
            <div className={randomCircle1} style={{top: values[0] + "%", background: "#F2A007"}}></div>
            <div className={randomCircle2} style={{top: values[1] + "%", background: "#F2D479"}}></div>
        </div>

        <div id="projects" style={{position: "relative", overflow: "hidden"}}>
            <ProjectsSection></ProjectsSection>
            <div className={randomCircle1} style={{top: values[2] + "%", background: "#F2D479"}}></div>
            <div className={randomCircle2} style={{top: values[3] + "%", background: "#F2C335"}}></div>
        </div>

        <div id="contactInfo" style={{position: "relative", overflow: "hidden"}}>
            <ContactSection></ContactSection>
            <div className={randomCircle1} style={{top: values[4] + "%", background: "#F2C335"}}></div>
            <div className={randomCircle2} style={{top: values[5] + "%", background: "#CDA291"}}></div>
        </div>

      </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
