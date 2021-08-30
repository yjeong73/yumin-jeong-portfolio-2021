// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
    homeIntro,
    homeName,
    homeDescription,
} from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p className={homeIntro}>Hello,</p>
        <p className={homeName}>I AM YUMIN JEONG,</p>
        <p className={homeDescription}>A recent graduate with passion for computer science and art</p>
        <p className={homeDescription}>who is seeking job opportunities as a front-end engineer.</p>
      </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
