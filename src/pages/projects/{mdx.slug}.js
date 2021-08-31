import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
    projectPhoto,
    projectTitles,
    heading,
} from '../../components/layout.module.css'

const ProjectPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

  return (
      <Layout pageTitle={data.mdx.frontmatter.title}>
      <h1 className={projectTitles}>{data.mdx.frontmatter.title}</h1>
        <GatsbyImage
          className={projectPhoto}
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
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
          hero_image_alt
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
