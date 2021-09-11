// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import CurvedText from '../components/CurvedText'
import { ArcText } from '@arctext/react'
import $ from 'jquery';
import CircleType from 'circletype';
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Switch from '@material-ui/core/Switch';
import { display } from '@material-ui/system';
import Fade from '@material-ui/core/Fade';
import { Button, Tooltip } from '@material-ui/core';
import {
    homeIntro,
    headingDecoration,
    homeDescription,
    heading,
    subheading,
    container,
    projectTitles,
    projectLinks,
    projectTechnology,
    projectInfoContainer,
    projectDescription,
    projectPhoto,
    projectButton,
    introduction,
    sections,
    education,
    educationItem,
    educationItemPicture,
    educationGT,
    educationDHS,
    skills,
    skillsItem,
    contactGrid,
    contactItem,
    projectGrid,
    projectItem,
    box1,
    box2,
    viewMore,
    viewLess,
    aboutMe,
    projects,
    contact,
    profilePic,
    profile,
    circleText,
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
} from '../components/layout.module.css'
import {
    cardBody,
    card,
    cardImage,
    cardText,
    cardStats,
    date,
    stat,
    type,
    value,
    overlayone,
    overlayinn,
    box,
    demo,
} from '../components/projectCard.module.css'

// Step 2: Define your component
const useStyles = makeStyles(theme => ({
  buttons: {
    width: "auto",
    // border: "2px solid #578d2b",
    // borderRadius: "0px",
    background: "transparent",
    color: "#578d2b",
    fontFamily: "Roboto-light",
    '&:hover': {
      transition: "0.5s ease",
      borderRadius: "0px",
      background: "rgba(130, 151, 109, 0.3)",
      color: "#578d2b"
    },
  },

  divider: {
    background: "#578d2b",
    width: "75%",
    margin: "auto",
    marginBottom: "50px",
    marginTop: "50px",
  }
}));

const LightTooltip = withStyles((theme) => ({
    arrow: {
        width: "2em",
        height: "2em",
        color: "rgba(255, 255, 255, 0.3)",
    },

    tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        color: "white",
        fontSize: "13px",
        fontFamily: "Roboto",
    },
}))(Tooltip);

const IndexPage = ({ data }) => {
  const classes = useStyles();

  const firstItem= data.allMdx.nodes[0]
  const secondItem= data.allMdx.nodes[1]
  const thirdItem= data.allMdx.nodes[2]

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [expand1, setExpand1] = React.useState(false);
  const [expand2, setExpand2] = React.useState(false);
  const [expand3, setExpand3] = React.useState(false);

  const handleEvent1 = () => {
    setChecked1((prev) => !prev);
    setExpand1((prev) => !prev);
  };

  const handleEvent2 = () => {
    setChecked2((prev) => !prev);
    setExpand2((prev) => !prev);
  };

  const handleEvent3 = () => {
    setChecked3((prev) => !prev);
    setExpand3((prev) => !prev);
  };

  return (
      <Layout pageTitle="Home Page">

        <div id="title" className={introduction}>
            <p className={homeIntro}>Hello,</p>
            <p style={{fontFamily:" Beth Ellen, cursive", fontSize: "5vh", color: "#578d2b", margin: "0"}}>I am</p>
            <p className={homeIntro}>YUMIN JEONG</p>
            <p className={homeDescription}>A recent graduate with a passion for
            <br/><span className={highlight}>computer science</span> and <span className={highlight}>art</span> who is seeking
            <br/>job opportunities as a front-end engineer.</p>
        </div>

        <div id="aboutMe" className={aboutMe}>
            <p className={headingDecoration}>first</p>
            <h1 className={heading}>About Me</h1>
            <div className={profile}>
                <div className={profilePic}>
                </div>
                <div className={educationItem}>
                    <p style={{fontFamily: "Roboto-light", color: "#578d2b", textAlign: "center", margin: "0", fontSize: "20px"}}>Somewhat useful information about myself</p>
                </div>
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
                        <p style={{fontFamily: "Icons-south", fontSize: "2vh", margin: "0px"}}>j<span style={{fontFamily: "Nanum Myeongjo, serif", fontSize: "2.5vh"}}><i>  Atlanta, Georgia</i></span></p>
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
                        <p style={{fontFamily: "Icons-south", fontSize: "2vh", margin: "0px"}}>j<span style={{fontFamily: "Nanum Myeongjo, serif", fontSize: "2.5vh"}}><i>  Duluth, Georgia</i></span></p>
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

        <div id="projects" className={projects}>

            <p className={headingDecoration}>second</p>
            <h2 className={heading}>Projects</h2>
            <p style={{fontFamily: "Roboto-light", color: "#578d2b", textAlign: "center", margin: "0", fontSize: "20px"}}>Some of my works</p>

            <Divider className={classes.divider}/>

            <div className={expand1 ? viewMore : viewLess}>
            <div className={projectGrid}>

                <div className={box1}>
                    <div className={projectItem}>
                        <GatsbyImage
                          imgStyle={{width: "20vh", height: "20vh", border: "3px solid #578d2b"}}
                          image={getImage(firstItem.frontmatter.hero_image)}
                        />
                    </div>
                </div>

                <div className={box2}>
                    <div className={projectItem}>
                        <h2 className={projectTitles}>
                            {firstItem.frontmatter.title}
                        </h2>
                        <p style={{fontSize: "25px", color: "grey", margin: "0"}}>{firstItem.frontmatter.date}</p>
                        <p style={{fontSize: "18px", color: "#578d2b"}}>Technology&#58; <span style={{fontFamily: "Roboto-light"}}>
                        {firstItem.frontmatter.technology}</span></p>

                        <Button
                            onClick={handleEvent1}
                            className={classes.buttons}
                        >
                            Project Description
                        </Button>
                    </div>

                    <div className={projectItem}>
                        <Fade in={checked1}>
                            <div className={projectDescription}>
                                <MDXRenderer>
                                  {firstItem.body}
                                </MDXRenderer>
                            </div>
                        </Fade>
                    </div>
                </div>

            </div>
            </div>

            <div className={expand2 ? viewMore : viewLess}>
            <div className={projectGrid}>

                <div className={box1}>
                    <div className={projectItem}>
                        <GatsbyImage
                          imgStyle={{width: "20vh", height: "20vh", border: "3px solid #578d2b"}}
                          image={getImage(secondItem.frontmatter.hero_image)}
                        />
                    </div>
                </div>

                <div className={box2}>
                    <div className={projectItem}>
                        <h2 className={projectTitles}>
                            {secondItem.frontmatter.title}
                        </h2>
                        <p style={{fontSize: "25px", color: "grey", margin: "0"}}>{secondItem.frontmatter.date}</p>
                        <p style={{fontSize: "18px", color: "#578d2b"}}>Technology&#58; <span style={{fontFamily: "Roboto-light"}}>
                        {secondItem.frontmatter.technology}</span></p>

                        <Button
                            onClick={handleEvent2}
                            className={classes.buttons}
                        >
                            Project Description
                        </Button>
                    </div>

                    <div className={projectItem}>
                        <Fade in={checked2}>
                            <div className={projectDescription}>
                                <MDXRenderer>
                                  {secondItem.body}
                                </MDXRenderer>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            </div>

            <div className={expand3 ? viewMore : viewLess}>
            <div className={projectGrid}>

                <div className={box1}>
                    <div className={projectItem}>
                        <GatsbyImage
                          imgStyle={{width: "20vh", height: "20vh", border: "3px solid #578d2b"}}
                          image={getImage(thirdItem.frontmatter.hero_image)}
                        />
                    </div>
                </div>

                <div className={box2}>
                    <div className={projectItem}>
                        <h2 className={projectTitles}>
                            {thirdItem.frontmatter.title}
                        </h2>
                        <p style={{fontSize: "25px", color: "grey", margin: "0"}}>{thirdItem.frontmatter.date}</p>
                        <p style={{fontSize: "18px", color: "#578d2b"}}>Technology&#58; <span style={{fontFamily: "Roboto-light"}}>
                        {thirdItem.frontmatter.technology}</span></p>

                        <Button
                            onClick={handleEvent3}
                            className={classes.buttons}
                        >
                            Project Description
                        </Button>
                    </div>

                    <div className={projectItem}>
                        <Fade in={checked3}>
                            <div className={projectDescription}>
                                <MDXRenderer>
                                  {thirdItem.body}
                                </MDXRenderer>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            </div>

        </div>

        <div id="contactInfo" className={contact}>
            <p className={headingDecoration}>third</p>
            <h3 className={heading} style={{color:"#3C4A2E"}}>Contact</h3>
            <p style={{fontFamily: "Roboto-light", color: "#3C4A2E", textAlign: "center", margin: "0", fontSize: "20px"}}>Let's talk! I am currently actively looking for new opportunities, so please feel free to leave me a message.</p>

            <Divider className={classes.divider}/>

            <div className={contactGrid}>
                <div className={contactItem}>
                    <p style={{fontFamily: "Roboto-light", fontSize: "18px", color: "#3C4A2E"}}>Linked In https://www.linkedin.com/in/yumin-jeong/</p>
                </div>
                <div className={contactItem}>
                    <p style={{fontFamily: "Roboto-light", fontSize: "18px", color: "#3C4A2E"}}>Email ymj982@gmail.com</p>
                </div>
            </div>
        </div>
      </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              date
              title
              technology
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              goal
            }
            id
            slug
            body
          }
        }
    }
`

// Step 3: Export your component
export default IndexPage
