import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    container,
    heading,
    projectTitles,
    projectLinks,
    projectTechnology,
    projectPhoto
} from '../../components/layout.module.css'
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
} from '../../components/projectCard.module.css'

const ProjectPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
        <h1 className={heading}>Projects</h1>
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

export default ProjectPage
