import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const Home: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <section className="flex pt-10 items-center justify-around max-h-screen">
        <div className="pl-5">
          <p className="text-6xl font-bold text-pink-700">Design</p>
          <p className="mt-4 text-2xl">
            Develop & 
            <span className="text-green-500"> Depoly</span>
          </p>
          <p>UX designer & web developer based in Manchester.</p>
        </div>
        {/* <div className="w-28 h-28">
          <GatsbyImage 
            // @ts-ignore
            image={data.file.childImageSharp.gatsbyImageData}
            alt="gatsby-image"
          />
        </div> */}
        <StaticImage 
          src="../images/banner.png" 
          alt="lll" 
          title="banner"
          width={500} 
          height={500}
        />
      </section>
    </Layout>
  )
}
export default Home
// use query in pages
export const query = graphql`
query GetCat {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
  }
}
`
