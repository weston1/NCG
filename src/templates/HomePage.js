import React from 'react'
import { graphql } from 'gatsby'

import MainHeader from '../components/MainHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  subtitle,
  logo,
  featuredImage,
  section1,
  body
}) => (
  <main className="Home">
    <MainHeader
      large
      title={title}
      logo={logo}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <h4>Trusted by over 5000+ Companies</h4>
      <div className="container row mx-auto">
        <div className="FeatureCard bg-primary">
          <h3>1</h3>
          <p>NCG is a new generation of consumer products.</p>
        </div>
        <div className="FeatureCard">
          <h3>2</h3>
          <p>NCG is a new generation of consumer products.</p>
        </div>
        <div className="FeatureCard">
          <h3>3</h3>
          <p>NCG is a new generation of consumer products.</p>
        </div>
        <div className="section container text-center">
          <Content source={section1} />
        </div>
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        section1
        logo
      }
    }
  }
`
