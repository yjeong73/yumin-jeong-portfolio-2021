// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from "gatsby-plugin-anchor-links";
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
const IndexPage = ({ data }) => {
  return (
      <Layout pageTitle="Home Page">

        <div className={introduction}>
            <p className={homeIntro}>Hello,</p>
            <p className={homeName}>I AM YUMIN JEONG,</p>
            <p className={homeDescription}>A recent graduate with a passion for
            <br/>computer science and art who is seeking
            <br/>job opportunities as a front-end engineer.</p>
        </div>

        <div className={sections}>
            <h1 id="aboutMe" className={heading}>About Me</h1>
            <p className={subheading}>EDUCATION:</p>

            <div className={education}>
                <div className={educationItem}>
                    <StaticImage
                      src="../images/cat.jpg"
                      width={150}
                      height={150}
                    />
                </div>
                <div className={educationItem}>
                    <p>Georgia Institute of Technology</p>
                    <p>Aug 2017 - May 2021</p>
                    <p>Location</p>
                </div>
                <div className={educationItem}>
                    <p>Bachelor of Science in Computer Science</p>
                    <p>Concentration: Intelligence-Media</p>
                </div>
            </div>

            <div className={education}>
                <div className={educationItem}>
                    <StaticImage
                      src="../images/cat.jpg"
                      width={150}
                      height={150}
                    />
                </div>
                <div className={educationItem}>
                    <p>Duluth High School</p>
                    <p>Aug 2013 - May 2017</p>
                    <p>Location</p>
                </div>
                <div className={educationItem}>
                    <p>Honors?</p>
                    <p>What did I do..</p>
                </div>
            </div>

            <p className={subheading}>SKILLS:</p>
            <p>Java, Python, C#, CSS, JavaScript, HTML, </p>
            <p className={subheading}>TOOLS:</p>
            <p>Git, Angular, React, Unity, Android Studio, Procreate, Adobe Photoshop, Figma</p>
            <p className={subheading}>LANGUAGES:</p>
            <p>Korean (Mother tongue), English (Fluent)</p>
        </div>

        <div className={sections}>
            <h2 id="projects" className={heading}>Projects</h2>
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
            <h3 id="contactInfo" className={heading}>Probably Contact</h3>
            <p className={homeDescription}>Contact: LinkedIn, GitHub</p>
            <p> some text some text some text some text some text some text</p>
            <p> some text some text some text some text some text some text</p>
            <p> some text some text some text some text some text some text</p>
            <p> some text some text some text some text some text some text</p>
            <p> some text some text some text some text some text some text</p>
            <p> some text some text some text some text some text some text</p>
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
