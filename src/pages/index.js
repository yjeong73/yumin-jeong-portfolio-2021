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
    highlight,
    circle1,
    circle2,
    circle3,
} from '../components/layout.module.css'

const IndexPage = () => {
  // useEffect(() => {
  //     $(document).mousemove(function (event) {
  //       var windowWidth = $(window).width();
  //       var windowHeight = $(window).height();
  //
  //       var mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  //       var mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);
  //
  //       document.getElementById("circles").style.top = mouseXpercentage + "%";
  //       document.getElementById("circles").style.left = mouseYpercentage + "%";
  //       console.log("mouse moving:", mouseXpercentage, mouseYpercentage);
  //     });
  // });

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

        <div id="aboutMe">
            <AboutSection></AboutSection>
        </div>

        <div id="projects">
            <ProjectsSection></ProjectsSection>
        </div>

        <div id="contactInfo">
            <ContactSection></ContactSection>
        </div>

      </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
