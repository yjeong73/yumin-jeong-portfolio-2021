// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
    container,
    heading,
    projectTitles,
    projectLinks,
    projectTechnology,
    projectPhoto
} from '../components/layout.module.css'

// Step 2: Define your component
const AboutPage = () => {
  return (
      <Layout pageTitle="About Me">
      <h1 className={heading}>About Me</h1>
        <p>Education: Georgia Institute of Technology 2017 - 2021
        Bachelor of Science in Computer Science Concentration: Intelligence-Media</p>
      </Layout>
  )
}
// Step 3: Export your component
export default AboutPage
