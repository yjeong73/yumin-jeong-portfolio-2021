// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>Hello, I am Yumin Jeong, A recent graduate with passion for computer science and art who is seeking job opportunities as a front-end engineer.</p>
      </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
