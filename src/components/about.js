import * as React from 'react'
import Divider from "@material-ui/core/Divider";
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from "@material-ui/core/styles";
import {
    headingDecoration,
    heading,
    subheading,
    education,
    educationItem,
    educationGT,
    educationDHS,
    skills,
    skillsItem,
    percentage,
    aboutMe,
    profilePic,
    profile,
    middle,
    language,
    languageItem,
    korean,
    english,
    highlight,
    plate,
    test,
    skillsGrid,
    barAnimation,
} from '../components/sections.module.css'

const useStyles = makeStyles(theme => ({
  divider: {
    background: "rgba(0, 0, 0, 0.1)",
    width: "40%",
    margin: "auto",
    marginBottom: "50px",
    marginTop: "50px",
  }
}));

const AboutSection = () => {
    const classes = useStyles();
    // document.getElementById("skill1").style.background = "white";

    return (
        <div className={aboutMe}>
            <div className={plate}></div>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <p className={headingDecoration}><span className={highlight}>01.🙋‍♀️</span></p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <h1 className={heading}>About Me</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={500}>
            <div className={profile}>
                <div className={profilePic}>
                </div>
                <p>Hi, I've been coding for about 4 years and I like building and designing things. <br/>In my spare time, I enjoy creating graphic designs/illustrations <br/>and supporting local Asian American artists, <br/>and I've had some opportunities work as a <a href="https://open.spotify.com/artist/5BN3GsRbz8oZM5A65K36Lx" target="_blank" style={{color: "#CDA291", textDecoration: "none"}}>cover art designer</a> too!</p>
            </div>

            <Divider className={classes.divider}/>

            <p className={subheading}>EDUCATION:</p>

                <div className={education}>
                    <div className={educationGT}>
                    </div>
                    <div className={educationItem}>
                        <p style={{fontWeight: "800", marginTop: "5px", marginBottom: "5px"}}>Georgia Institute of Technology</p>
                        <p style={{margin: "0px"}}>Aug 2017 - May 2021</p>
                        <p style={{margin: "0px", fontFamily: "Nanum Myeongjo, serif", fontSize: "2.5vh"}}>📍<i>Atlanta, Georgia</i></p>
                    </div>
                    <div className={educationItem}>
                        <p style={{fontWeight: "800", marginTop: "5px", marginBottom: "5px"}}>Bachelor of Science in Computer Science</p>
                        <p style={{margin: "0px"}}>Concentration: Intelligence-Media</p>
                    </div>
                </div>

                <div className={education}>
                    <div className={educationDHS}>
                    </div>
                    <div className={educationItem}>
                        <p style={{fontWeight: "800", marginTop: "5px", marginBottom: "5px"}}>Duluth High School</p>
                        <p style={{margin: "0px"}}>Aug 2013 - May 2017</p>
                        <p style={{margin: "0px", fontFamily: "Nanum Myeongjo, serif", fontSize: "2.5vh"}}>📍<i>Duluth, Georgia</i></p>
                    </div>
                    <div className={educationItem}>
                        <p style={{fontWeight: "800", marginTop: "5px", marginBottom: "5px"}}>Honors?</p>
                        <p>What did I do..</p>
                    </div>
                </div>

            <Divider className={classes.divider}/>

            <p className={subheading}>SKILLS:</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <div className={skillsGrid}>
                <div className={skills}>
                    <p style={{margin: "0", marginBottom: "15px"}}>Java</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Python</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>C#</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>CSS</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>JavaScript</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>HTML</p>
                </div>

                <div className={test}>
                    <div style={{height: "100%", marginBottom: "15px", width: "80%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(242, 195, 53, 0.7), rgba(242, 137, 7, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "80%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(242, 195, 53, 0.7), rgba(242, 137, 7, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "20%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(242, 195, 53, 0.7), rgba(242, 137, 7, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "60%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(242, 195, 53, 0.7), rgba(242, 137, 7, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "60%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(242, 195, 53, 0.7), rgba(242, 137, 7, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "40%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(242, 195, 53, 0.7), rgba(242, 137, 7, 0.7))"}}></ScrollAnimation>
                    </div>
                </div>

                <div className={percentage}>
                    <p style={{margin: "0", marginBottom: "15px"}}>80%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>80%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>20%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>60%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>60%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>40%</p>
                </div>

            </div>
            </ScrollAnimation>

            <Divider className={classes.divider}/>

            <p className={subheading}>TOOLS:</p>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
            <div className={skillsGrid}>
                <div className={skills}>
                    <p style={{margin: "0", marginBottom: "15px"}}>Git</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Angular</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>React</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Unity</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Procreate</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Photoshop</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Figma</p>
                </div>

                <div className={test}>
                    <div style={{height: "100%", marginBottom: "15px", width: "80%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "60%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true}style={{background: "linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "60%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "40%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "100%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "60%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7))"}}></ScrollAnimation>
                    </div>
                    <div style={{height: "100%", marginBottom: "15px", width: "60%"}}>
                        <ScrollAnimation animateIn={barAnimation} animateOnce={true} style={{background: "linear-gradient(45deg, rgba(205, 162, 145, 0.7), rgba(179, 129, 91, 0.7))"}}></ScrollAnimation>
                    </div>
                </div>

                <div className={percentage}>
                    <p style={{margin: "0", marginBottom: "15px"}}>80%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>60%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>60%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>40%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>100%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>60%</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>60%</p>
                </div>
            </div>
            </ScrollAnimation>

            <Divider className={classes.divider}/>

            <p className={subheading}>LANGUAGES:</p>

            <div className={language}>
                <div className={languageItem}>
                    <p>Korean (Mother tongue)</p>
                </div>
                <div className={korean}>
                </div>
            </div>

            <div className={language}>
                <div className={languageItem}>
                    <p>English (Fluent)</p>
                </div>
                <div className={english}>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
