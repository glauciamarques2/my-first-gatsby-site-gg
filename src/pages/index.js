// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
     <Layout pageTitle="Home Page">
      <p>Hello! My Name Is GIGI and I Love Eating Chicken Breast</p>
      <StaticImage
        alt="A litle dog looking stoically at the camera"
        src="../images/capitan.png"
      />
    </Layout>
  )
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage

