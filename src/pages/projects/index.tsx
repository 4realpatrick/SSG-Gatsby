import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { IAllMarkdownRemark } from '../../interface'
const Projects: React.FC<PageProps> = ({ data }) => {
  // @ts-ignore
  const md: IAllMarkdownRemark = data
  console.log(md);
  return (
    <Layout>
      <main className="flex min-h-screen flex-col justify-center items-center">
        <div className="text-4xl text-purple-700">project</div>
        <div className="text-6xl text-purple-700 font-semibold">demonstration</div>
        <div className="border-purple-700 border-2 p-5 mt-4 rounded-lg">
          {
            md.allMarkdownRemark.nodes.map(item => (
              <Link to={`/projects/${item.frontmatter.slug}`} key={item.id}>
                <div className="border-b-2 border-blue-300 cursor-pointer">
                  <h3 className="text-xl text-purple-700">{item.frontmatter.title}</h3>
                  <p className="text-red-400">{item.frontmatter.stack}</p>
                </div>
              </Link>
            ))
          }
        </div>
        <div className="mt-4">
          any issues ? contact me at {md.site.siteMetadata.contact}
        </div>
      </main>
    </Layout>
  )
}
export default Projects
/*
  allMarkdownRemark can be rename like 
  test:allMarkdownRemark 
  now the respose data will be test
  if u want request multiple query 
  just do as down below 
*/
export const query = graphql`
  query MarkdownPage {
    allMarkdownRemark(sort: {fields: frontmatter___create_time, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`