import * as React from 'react'
import Layout from '../components/layout'
import TitleSection from '../components/title'
import AboutSection from '../components/about'
import ProjectsSection from '../components/projects'
import ContactSection from '../components/contact'
import {
    randomCircle1,
    randomCircle2,
} from '../components/layout.module.css'

function randomValue() {
    return Math.floor(Math.random() * 101);
}

const IndexPage = () => {
  const values = [randomValue(), randomValue(), randomValue(), randomValue(), randomValue()];

  return (
      <Layout pageTitle="Home Page">
        <div id="title">
            <TitleSection></TitleSection>
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

export default IndexPage
