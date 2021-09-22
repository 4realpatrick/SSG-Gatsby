import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { ISinglePicQuery } from '../interface'
const Home: React.FC<PageProps> = ({ data }) => {
  // @ts-ignore
  const image:ISinglePicQuery = data
  
  return (
    <Layout>
      <section>
        <h2 className="title">Design</h2>
        <h3>Develop & Depoly</h3>
        <p>UX designer & web developer based in Manchester.</p>
        {/* <Img fluid={image.file.childImageSharp.fluid} /> */}
      </section>
    </Layout>
  )
}
export default Home
// use query in pages
export const query = graphql`
query GetCat {
  file(relativePath: {eq: "movingCat.jpeg"}) {
    id
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`