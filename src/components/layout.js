import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    mainLogo,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <title>{data.site.siteMetadata.title} | {pageTitle}</title>
      <nav className={navLinks}>
        <h1>
          <AnchorLink to="/#title" className={mainLogo}>
            HOME
          </AnchorLink>
        </h1>
        <ul>
          <li className={navLinkItem}>
            <AnchorLink to="/#aboutMe" className={navLinkText}>
                ABOUT
            </AnchorLink>
          </li>
          <li className={navLinkItem}>
          <AnchorLink to="/#projects" className={navLinkText}>
              PROJECTS
          </AnchorLink>
          </li>
          <li className={navLinkItem}>
          <AnchorLink to="/#contactInfo" className={navLinkText}>
              CONTACT
          </AnchorLink>
          </li>
        </ul>
      </nav>
      <main className={container}>
        {children}
      </main>
    </div>
  )
}

export default Layout
