import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll';
import {
    headingDecoration,
    heading,
    subheading,
    education,
    educationItem,
    skills,
    skillsItem,
    percentage,
    profilePic,
    profile,
    language,
    highlight,
    chart,
    barAnimation,
    divider,
} from '../styles/sections.module.css'

const AboutSection = () => {
    const Bar1 = styled.div`
      margin-bottom: 15px;
      background: linear-gradient(45deg, rgba(242, 195, 53, 0.7), rgba(242, 137, 7, 0.7));
    `;

    const Bar2 = styled.div`
      margin-bottom: 15px;
      background: linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7));
    `;

    function toggle1() {
        var childDivs = document.getElementById("chart1").getElementsByTagName("div");

        for(var i=0; i< childDivs.length; i++ ) {
            var childDiv = childDivs[i];
            childDiv.style.animationPlayState = "running";
        }
    }
    function toggle2() {
        var childDivs = document.getElementById("chart2").getElementsByTagName("div");

        for(var i=0; i< childDivs.length; i++ ) {
            var childDiv = childDivs[i];
            childDiv.style.animationPlayState = "running";
        }
    }

    return (
        <div>
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
                <p className={headingDecoration}><span className={highlight}>01.🙋‍♀️</span></p>
                <h1 className={heading}>About Me</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <div className={profile}>
                <div className={profilePic}>
                </div>
                <p>Hi, I've been coding for about 4 years and I like building and designing things. <br/>In my spare time, I enjoy creating graphic designs/illustrations <br/>and supporting local Asian American artists, <br/>and I've had some opportunities work as a <a href="https://open.spotify.com/artist/5BN3GsRbz8oZM5A65K36Lx" target="_blank" rel="noopener noreferrer" style={{color: "#CDA291", textDecoration: "none"}}>cover art designer</a> too!</p>
            </div>
            </ScrollAnimation>

            <div className={divider}></div>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>EDUCATION</p>
            </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
                <div className={education}>
                    <div className={educationItem} style={{background: "#F2D479", borderRadius: "50%", border: "none", height: "75px", width:"75px", margin: "auto"}}>
                        <StaticImage
                          src="../images/gt.webp"
                        />
                    </div>
                    <div className={educationItem}>
                        <p1>Georgia Institute of Technology</p1>
                        <p>Aug 2017 - May 2021</p>
                        <p>📍<i>Atlanta, Georgia</i></p>
                    </div>
                    <div className={educationItem}>
                        <p1>Bachelor of Science in Computer Science</p1>
                        <p>Concentration: Intelligence-Media</p>
                    </div>
                </div>
                </ScrollAnimation>

            <div className={divider}></div>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>SKILLS</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} afterAnimatedIn={toggle1}>
            <div className={skills}>
                <div className={skillsItem}>
                    <p>Java</p>
                    <p>Python</p>
                    <p>C#</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>HTML</p>
                </div>
                <div className={chart} id="chart1">
                    <Bar1 style={{width: "80%"}} className={barAnimation}></Bar1>
                    <Bar1 style={{width: "80%"}} className={barAnimation}></Bar1>
                    <Bar1 style={{width: "20%"}} className={barAnimation}></Bar1>
                    <Bar1 style={{width: "60%"}} className={barAnimation}></Bar1>
                    <Bar1 style={{width: "60%"}} className={barAnimation}></Bar1>
                    <Bar1 style={{width: "40%"}} className={barAnimation}></Bar1>
                </div>
                <div className={percentage}>
                    <p>80%</p>
                    <p>80%</p>
                    <p>20%</p>
                    <p>60%</p>
                    <p>60%</p>
                    <p>40%</p>
                </div>
            </div>
            </ScrollAnimation>

            <div className={divider}></div>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>TOOLS</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} afterAnimatedIn={toggle2}>
            <div className={skills}>
                <div className={skillsItem}>
                    <p>Git</p>
                    <p>Angular</p>
                    <p>React</p>
                    <p>Unity</p>
                    <p>Procreate</p>
                    <p>Photoshop</p>
                    <p>Figma</p>
                </div>
                <div className={chart} id="chart2">
                    <Bar2 style={{width: "80%"}} className={barAnimation}></Bar2>
                    <Bar2 style={{width: "60%"}} className={barAnimation}></Bar2>
                    <Bar2 style={{width: "60%"}} className={barAnimation}></Bar2>
                    <Bar2 style={{width: "40%"}} className={barAnimation}></Bar2>
                    <Bar2 style={{width: "100%"}} className={barAnimation}></Bar2>
                    <Bar2 style={{width: "60%"}} className={barAnimation}></Bar2>
                    <Bar2 style={{width: "60%"}} className={barAnimation}></Bar2>
                </div>
                <div className={percentage}>
                    <p>80%</p>
                    <p>60%</p>
                    <p>60%</p>
                    <p>40%</p>
                    <p>100%</p>
                    <p>60%</p>
                    <p>60%</p>
                </div>
            </div>
            </ScrollAnimation>

            <div className={divider}></div>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>LANGUAGES</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <div className={language}>
                <p><span className={highlight} style={{marginRight: "15px"}}>🇰🇷</span>Korean <span style={{color: "#A7905E", fontWeight:"400"}}>(Native)</span></p>

                <p style={{marginBottom: "110px"}}><span className={highlight} style={{marginRight: "15px"}}>🇺🇸</span>English <span style={{color: "#A7905E", fontWeight:"400"}}>(Fluent)</span></p>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default AboutSection
