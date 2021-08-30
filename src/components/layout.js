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
    <div className={container}>
      <title>{data.site.siteMetadata.title} | {pageTitle}</title>
      <nav className={navLinks}>
        <h1>
          <Link to="/" className={mainLogo}>
            HOME
          </Link>
        </h1>
        <ul>
          <li className={navLinkItem}>
            <AnchorLink to="/#aboutMe" className={navLinkText}>
                ABOUT
            </AnchorLink>
          </li>
          <li className={navLinkItem}>
            <AnchorLink to="/#contactInfo" className={navLinkText}>
                CONTACT
            </AnchorLink>
          </li>
          <li className={navLinkItem}>
            <Link to="/projects" className={navLinkText}>
                PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
