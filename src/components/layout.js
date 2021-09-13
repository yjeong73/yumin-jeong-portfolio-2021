import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText,
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
      <AnchorLink to="/#title" className={mainLogo}>
        <StaticImage
          src="../images/new_logo.png"
          width={40}
          height={40}
        />
      </AnchorLink>
      <nav className={navLinks}>
          <div className={navLinkItem}>
            <AnchorLink to="/#aboutMe" className={navLinkText}>
                ABOUT
            </AnchorLink>
          </div>
          <div className={navLinkItem}>
          <AnchorLink to="/#projects" className={navLinkText}>
              PROJECTS
          </AnchorLink>
          </div>
          <div className={navLinkItem}>
          <AnchorLink to="/#contactInfo" className={navLinkText}>
              CONTACT
          </AnchorLink>
          </div>
      </nav>
      <main className={container}>
        {children}
      </main>
    </div>
  )
}

export default Layout
