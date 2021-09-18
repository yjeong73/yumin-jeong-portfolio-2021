import * as React from 'react'
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
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
    languageItem,
    highlight,
    chart,
    barAnimation,
} from '../styles/sections.module.css'

const useStyles = makeStyles(theme => ({
  divider: {
    background: "rgba(0, 0, 0, 0.1)",
    width: "40%",
    margin: "auto",
    marginBottom: "75px",
    marginTop: "75px",
  }
}));

const AboutSection = () => {
    const classes = useStyles();

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

            <Divider className={classes.divider}/>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>EDUCATION</p>
            </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
                <div className={education}>
                    <div className={educationItem} style={{background: "#F2D479", borderRadius: "50%", border: "none", height: "75px", width:"75px", margin: "auto"}}>
                        <StaticImage
                          src="../images/gt.png"
                        />
                    </div>
                    <div className={educationItem}>
                        <p style={{fontWeight: "800", marginTop: "5px", marginBottom: "5px"}}>Georgia Institute of Technology</p>
                        <p style={{margin: "0px", color: "#A7905E"}}>Aug 2017 - May 2021</p>
                        <p style={{margin: "0px", color: "#A7905E"}}>📍<i>Atlanta, Georgia</i></p>
                    </div>
                    <div className={educationItem}>
                        <p style={{fontWeight: "800", marginTop: "5px", marginBottom: "5px"}}>Bachelor of Science in Computer Science</p>
                        <p style={{margin: "0px", color: "#A7905E"}}>Concentration: Intelligence-Media</p>
                    </div>
                </div>
                </ScrollAnimation>

            <Divider className={classes.divider}/>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>SKILLS</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <div className={skills}>
                <div className={skillsItem}>
                    <p style={{margin: "0", marginBottom: "15px"}}>Java</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Python</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>C#</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>CSS</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>JavaScript</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>HTML</p>
                </div>

                <div className={chart}>
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

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>TOOLS</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <div className={skills}>
                <div className={skillsItem}>
                    <p style={{margin: "0", marginBottom: "15px"}}>Git</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Angular</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>React</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Unity</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Procreate</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Photoshop</p>
                    <p style={{margin: "0", marginBottom: "15px"}}>Figma</p>
                </div>

                <div className={chart}>
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

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>LANGUAGES</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} delay={300}>
            <div className={language}>
                <div style={{height: "50px", width: "50px", borderRadius: "50%", border: "5px solid #F2D479"}}>
                    <StaticImage
                      src="../images/korea.png"
                      width={100}
                      height={100}
                      imgStyle={{borderRadius: "50%"}}
                    />
                </div>
                <div className={languageItem}>
                    <p>Korean <span style={{color: "#A7905E", fontWeight:"400"}}>(Native)</span></p>
                </div>
            </div>

            <div className={language} style={{marginBottom: "110px"}}>
                <div style={{height: "50px", width: "50px", borderRadius: "50%", border: "5px solid #F2D479"}}>
                    <StaticImage
                      src="../images/us.png"
                      width={100}
                      height={100}
                      imgStyle={{borderRadius: "50%"}}
                    />
                </div>
                <div className={languageItem}>
                    <p>English <span style={{color: "#A7905E", fontWeight:"400"}}>(Fluent)</span></p>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default AboutSection
