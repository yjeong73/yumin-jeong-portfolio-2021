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
        <div className={cardBody}>
            <div className={card}>
                <div className={cardImage}></div>
                <div className={cardText}>
                    <span className={date}>4 days ago</span>
                    <h2>Post One</h2>
                    <p> Description goes here!</p>
                </div>
                <div className={cardStats}>
                    <div className={stat}>
                        <div className={value}>4m</div>
                        <div className={type}>read</div>
                    </div>
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
          }
          id
          slug
        }
      }
    }
`

export default ProjectPage
