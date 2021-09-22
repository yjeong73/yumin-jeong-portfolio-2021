import * as React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Skills from '../components/skills'
import Tools from '../components/tools'
import {
    subheading,
    profile,
    profilePic,
    education,
    educationPic,
    language,
} from '../styles/about.module.css'
import {
    headingDecoration,
    heading,
    highlight,
    divider,
} from '../styles/layout.module.css'

const AboutSection = () => {
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
                    <div className={educationPic}></div>
                    <div>
                        <p1>Georgia Institute of Technology</p1>
                        <p>Aug 2017 - May 2021</p>
                        <p>📍<i>Atlanta, Georgia</i></p>
                    </div>
                    <div>
                        <p1>Bachelor of Science in Computer Science</p1>
                        <p>Concentration: Intelligence-Media</p>
                    </div>
                </div>
                </ScrollAnimation>

            <div className={divider}></div>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>SKILLS</p>
            </ScrollAnimation>

            <Skills></Skills>

            <div className={divider}></div>

            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
            <p className={subheading}>TOOLS</p>
            </ScrollAnimation>

            <Tools></Tools>

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
