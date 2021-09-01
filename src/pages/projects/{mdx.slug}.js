import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Layout from '../../components/layout'
import {
    projectPhoto,
    projectTitles,
    projectContainer,
    projectInfoContainer,
    heading,
    sections,
} from '../../components/layout.module.css'

const useStyles = makeStyles(theme => ({
  divider: {
    background: "white",
    width: "50%",
    marginBottom: "30px",
    marginTop: "30px",
  }
}));

const ProjectPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    const classes = useStyles();
  return (
      <Layout pageTitle={data.mdx.frontmatter.title}>
          <div className={projectContainer}>
                <GatsbyImage
                  className={projectPhoto}
                  image={image}
                  alt={data.mdx.frontmatter.hero_image_alt}
                />
                <div className={projectInfoContainer}>
                    <h1 className={projectTitles}>{data.mdx.frontmatter.title}</h1>
                    <p style={{color: "grey", fontFamily: "Roboto", fontSize: "20px", marginTop: "0"}}>{data.mdx.frontmatter.date}</p>

                    <Divider className={classes.divider}/>

                    <p style={{color: "white", fontFamily: "Roboto", fontSize: "25px", marginBottom: "0"}}>Project Description</p>
                    <MDXRenderer>
                      {data.mdx.body}
                    </MDXRenderer>

                    <Divider className={classes.divider}/>

                    <p style={{color: "white", fontFamily: "Roboto", fontSize: "25px", marginBottom: "0"}}>Technology</p>
                    <p>{data.mdx.frontmatter.technology}</p>

                </div>
          </div>
    </Layout>
  )
}

export const query = graphql`
    query ($slug: String) {
      mdx(slug: {eq: $slug}) {
        body
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
      }
    }
`

export default ProjectPost
