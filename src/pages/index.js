// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
    homeIntro,
    homeName,
    homeDescription,
    heading,
} from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p className={homeIntro}>Hello,</p>
        <p className={homeName}>I AM YUMIN JEONG,</p>
        <p className={homeDescription}>A recent graduate with passion for computer science and art</p>
        <p className={homeDescription}>who is seeking job opportunities as a front-end engineer.</p>
        <h1 className={heading}>About Me</h1>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <h2 className={heading}>Another About Me</h2>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <h3 className={heading}>Probably Contact</h3>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
        <p className={homeDescription}>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
      </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
