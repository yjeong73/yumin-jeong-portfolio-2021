import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
    container,
    heading,
    projectTitles,
    projectLinks,
    projectTechnology,
} from '../../components/layout.module.css'

const ProjectPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects">
        {
        data.allMdx.nodes.map((node) => (
            <article key={node.id}>
                <h2 className={projectTitles}>
                    <Link to={`/projects/${node.slug}`} className={projectLinks}>
                        {node.frontmatter.title}
                    </Link>
                </h2>
                <p className={projectTechnology}>
                Tecnology&#58; {node.frontmatter.technology}</p>
            </article>
            ))
        }
    </Layout>
  )
}

export const query = graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            technology
          }
          id
          slug
        }
      }
    }
`

export default ProjectPage
