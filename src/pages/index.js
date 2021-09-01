// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
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
    projectPhoto,
    introduction,
    sections,
    education,
    educationItem,
    educationItemPicture,
    skills,
    skillsItem,
    contactGrid,
    contactItem,
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
} from '../components/projectCard.module.css'

// Step 2: Define your component

const useStyles = makeStyles(theme => ({
  divider: {
    background: "white",
    width: "75%",
    margin: "auto",
    marginBottom: "50px",
    marginTop: "50px",
  }
}));

const IndexPage = ({ data }) => {
  const classes = useStyles();
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

            <div className={cardBody}>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <Link to={`/projects/${node.slug}`} className={projectLinks}>
                            <div className={card}>
                                <GatsbyImage
                                  className={cardImage}
                                  image={getImage(node.frontmatter.hero_image)}
                                />
                                <div className={cardText}>
                                    <span className={date}>{node.frontmatter.date}</span>
                                    <h2 className={projectTitles}>
                                        {node.frontmatter.title}
                                    </h2>
                                    <p className={projectTechnology}>
                                    Goal&#58; {node.frontmatter.goal}</p>
                                </div>
                                <div className={cardStats}>
                                    <div className={stat}>
                                        <div className={type}>Technology&#58;</div>
                                        <div className={value}>{node.frontmatter.technology}</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </article>
                        ))
                }
            </div>
        </div>

        <div className={sections}>
            <h3 id="contactInfo" className={heading}>Contact</h3>
            <p style={{fontFamily: "Roboto-light", color: "white", textAlign: "center", margin: "0", fontSize: "20px"}}>Some ways you can contact me</p>

            <Divider className={classes.divider}/>

            <div className={contactGrid}>
                <div className={contactItem}>
                    <p>Linked In</p>
                </div>
                <div className={contactItem}>
                    <p>Email</p>
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
          }
        }
    }
`

// Step 3: Export your component
export default IndexPage
