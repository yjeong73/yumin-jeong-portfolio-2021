// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
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
    homeName,
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
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontFamily: "Roboto-light",
    '&:hover': {
      transition: "0.5s ease",
      background: "rgba(255, 255, 255, 0.05)",
      color: "white"
    },
  },

  divider: {
    background: "white",
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
            <p className={homeName}>I AM YUMIN JEONG,</p>
            <p className={homeDescription}>A recent graduate with a passion for
            <br/>computer science and art who is seeking
            <br/>job opportunities as a front-end engineer.</p>
        </div>

        <div className={sections}>
            <h1 id="aboutMe" className={heading}>About Me</h1>
            <p style={{fontFamily: "Roboto-light", color: "white", textAlign: "center", margin: "0", fontSize: "20px"}}>Somewhat useful information about myself</p>

            <Divider className={classes.divider}/>

            <p className={subheading}>EDUCATION:</p>

            <div className={education}>
                <div className={educationItemPicture}>
                    <StaticImage
                      src="../images/gt.png"
                      width={150}
                      height={150}
                    />
                </div>
                <div className={educationItem}>
                    <p style={{fontFamily: "Roboto", fontSize: "18px", marginBottom: "5px"}}>Georgia Institute of Technology</p>
                    <p style={{margin: "0px"}}>Aug 2017 - May 2021</p>
                    <p style={{fontFamily: "Icons-south", fontSize: "13px", margin: "0px"}}>j<span style={{fontFamily: "Roboto-light", fontSize: "16px"}}><i>  Atlanta, Georgia</i></span></p>
                </div>
                <div className={educationItem}>
                    <p style={{fontFamily: "Roboto", fontSize: "18px", marginBottom: "5px"}}>Bachelor of Science in Computer Science</p>
                    <p style={{margin: "0px"}}>Concentration: Intelligence-Media</p>
                </div>
            </div>

            <div className={education}>
                <div className={educationItemPicture}>
                    <StaticImage
                      src="../images/dhs.png"
                      width={150}
                      height={150}
                    />
                </div>
                <div className={educationItem}>
                    <p style={{fontFamily: "Roboto", fontSize: "18px", marginBottom: "5px"}}>Duluth High School</p>
                    <p style={{margin: "0px"}}>Aug 2013 - May 2017</p>
                    <p style={{fontFamily: "Icons-south", fontSize: "13px", margin: "0px"}}>j<span style={{fontFamily: "Roboto-light", fontSize: "16px"}}><i>  Duluth, Georgia</i></span></p>
                </div>
                <div className={educationItem}>
                    <p style={{fontFamily: "Roboto", fontSize: "18px", marginBottom: "5px"}}>Honors?</p>
                    <p>What did I do..</p>
                </div>
            </div>

            <Divider className={classes.divider}/>

            <p className={subheading}>SKILLS:</p>

            <div className={skills}>
                <div className={skillsItem}>
                    <p>Java</p>
                    <p>Python</p>
                    <p>C#</p>
                </div>
                <div className={skillsItem}>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>HTML</p>
                </div>
            </div>

            <Divider className={classes.divider}/>

            <p className={subheading}>TOOLS:</p>

            <div className={skills}>
                <div className={skillsItem}>
                    <p>Git</p>
                    <p>Angular</p>
                    <p>React</p>
                    <p>Unity</p>
                </div>
                <div className={skillsItem}>
                    <p>Android Studio</p>
                    <p>Procreate</p>
                    <p>Adobe Photoshop</p>
                    <p>Figma</p>
                </div>
            </div>

            <Divider className={classes.divider}/>

            <p className={subheading}>LANGUAGES:</p>

            <div className={skills}>
                <div className={skillsItem}>
                    <p>Korean (Mother tongue)</p>
                </div>
                <div className={skillsItem}>
                    <p>English (Fluent)</p>
                </div>
            </div>

        </div>

        <div className={sections}>

            <h2 id="projects" className={heading}>Projects</h2>
            <p style={{fontFamily: "Roboto-light", color: "white", textAlign: "center", margin: "0", fontSize: "20px"}}>Some of my projects</p>

            <Divider className={classes.divider}/>

            <div className={expand1 ? viewMore : viewLess}>
            <div className={projectGrid}>

                <div className={box1}>
                    <div className={projectItem}>
                        <GatsbyImage
                          imgStyle={{width: "75%", height: "75%"}}
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
                        <p style={{fontSize: "18px", color: "white"}}>Technology&#58; <span style={{fontFamily: "Roboto-light"}}>
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
                          imgStyle={{width: "75%", height: "75%"}}
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
                        <p style={{fontSize: "18px", color: "white"}}>Technology&#58; <span style={{fontFamily: "Roboto-light"}}>
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
                          imgStyle={{width: "75%", height: "75%"}}
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
                        <p style={{fontSize: "18px", color: "white"}}>Technology&#58; <span style={{fontFamily: "Roboto-light"}}>
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

        <div className={sections}>
            <h3 id="contactInfo" className={heading}>Contact</h3>
            <p style={{fontFamily: "Roboto-light", color: "white", textAlign: "center", margin: "0", fontSize: "20px"}}>Some ways you can contact me</p>

            <Divider className={classes.divider}/>

            <div className={contactGrid}>
                <div className={contactItem}>
                    <p style={{fontFamily: "Roboto-light", fontSize: "18px"}}>Linked In https://www.linkedin.com/in/yumin-jeong/</p>
                </div>
                <div className={contactItem}>
                    <p style={{fontFamily: "Roboto-light", fontSize: "18px"}}>Email ymj982@gmail.com</p>
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
