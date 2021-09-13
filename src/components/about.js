import * as React from 'react'
import Divider from "@material-ui/core/Divider";
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
    aboutMe,
    profilePic,
    profile,
    middle,
    chart,
    chart2,
    bar,
    bar2,
    tools,
    toolsItem,
    language,
    languageItem,
    korean,
    english,
    highlight,
    plate,
} from '../components/sections.module.css'

const useStyles = makeStyles(theme => ({
  divider: {
    background: "#4D4637",
    width: "75%",
    margin: "auto",
    marginBottom: "50px",
    marginTop: "50px",
  }
}));

const AboutSection = () => {
    const classes = useStyles();
    return (
        <div className={aboutMe}>
            <div className={plate}></div>
            <p className={headingDecoration}><span className={highlight}>01.🙋</span></p>
            <h1 className={heading}>About Me</h1>
            <div className={profile}>
                <div className={profilePic}>
                </div>
                <p>I've been coding for about 4 years and I like building and designing things. <br/>In my spare time, I enjoy supporting local Asian American artists, <br/>and I've had some opportunities work as a <a href="https://open.spotify.com/artist/5BN3GsRbz8oZM5A65K36Lx" target="_blank" style={{color: "#CDA291", textDecoration: "none"}}>cover art designer</a> too.</p>
            </div>

            <Divider className={classes.divider}/>

            <p className={subheading}>EDUCATION:</p>

            <div className={middle}>
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
            </div>

            <Divider className={classes.divider}/>

            <p className={subheading} style={{textAlign:"right"}}>SKILLS:</p>

            <div className={middle}>
            <div className={skills}>
                <div className={chart}>
                    <div className={bar} style={{gridColumnStart: "2",  animation: "0.5s ease"}}></div>
                    <div className={bar} style={{gridColumnStart: "2"}}></div>
                    <div className={bar} style={{gridColumnStart: "5"}}></div>
                    <div className={bar} style={{gridColumnStart: "3"}}></div>
                    <div className={bar} style={{gridColumnStart: "4"}}></div>
                    <div className={bar} style={{gridColumnStart: "4"}}></div>
                </div>
                <div className={skillsItem}>
                    <p style={{margin: "0", marginBottom: "3vh"}}>Java</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>Python</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>C#</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>CSS</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>JavaScript</p>
                    <p style={{margin: "0"}}>HTML</p>
                </div>
            </div>
            </div>

            <Divider className={classes.divider}/>

            <p className={subheading}>TOOLS:</p>

            <div className={middle}>
            <div className={tools}>
                <div className={toolsItem}>
                    <p style={{margin: "0", marginBottom: "3vh"}}>Git</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>Angular</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>React</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>Unity</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>Android Studio</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>Procreate</p>
                    <p style={{margin: "0", marginBottom: "3vh"}}>Adobe Photoshop</p>
                    <p style={{margin: "0"}}>Figma</p>
                </div>
                <div className={chart2}>
                    <div className={bar2} style={{gridColumnEnd: "4"}}></div>
                    <div className={bar2} style={{gridColumnEnd: "3"}}></div>
                    <div className={bar2} style={{gridColumnEnd: "3"}}></div>
                    <div className={bar2} style={{gridColumnEnd: "2"}}></div>
                    <div className={bar2} style={{gridColumnEnd: "2"}}></div>
                    <div className={bar2} style={{gridColumnEnd: "5"}}></div>
                    <div className={bar2} style={{gridColumnEnd: "3"}}></div>
                    <div className={bar2} style={{gridColumnEnd: "3"}}></div>
                </div>
            </div>
            </div>

            <Divider className={classes.divider}/>

            <p className={subheading} style={{textAlign: "right"}}>LANGUAGES:</p>

            <div className={middle}>
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

        </div>
    )
}

export default AboutSection
