import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from 'gatsby-plugin-image'
import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';
import {
    container,
    navLinks,
    navLinkText,
    mainLogo,
    contactBar,
} from '../styles/layout.module.css'

const Layout = ({ children }) => {
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
      <title>{data.site.siteMetadata.title}</title>

      <AnchorLink to="/#title" className={mainLogo}>
        <StaticImage
          src="../images/new_logo.png"
          width={40}
          height={40}
        />
      </AnchorLink>

      <div className={contactBar}>
        <div style={{width: "50px", height: "2px", background: "#4D4637"}}></div>
        <div>
            <a href="https://www.linkedin.com/in/yumin-jeong/" target="_blank" rel="noopener noreferrer" style={{color: "#4D4637"}}>
            <Linkedin color="#4D4637"/></a>
        </div>
        <div>
            <a href={`mailto:ymj982@gmail.com`} style={{color: "#4D4637"}}>
            <Mail color="#4D4637"/></a>
            </div>
      </div>

      <nav className={navLinks}>
          <div>
            <AnchorLink to="/#aboutMe" className={navLinkText}>
                ABOUT
            </AnchorLink>
          </div>
          <div>
          <AnchorLink to="/#projects" className={navLinkText}>
              PROJECTS
          </AnchorLink>
          </div>
          <div>
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
