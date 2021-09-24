import { graphql,PageProps,Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const ProjectDetails:React.FC<PageProps> = ({ data }) => {
  // @ts-ignore
  const { html } = data.markdownRemark
  // @ts-ignore
  const { title, stack } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className="px-20 mb-14">
        <h2 className="text-5xl mt-20 text-purple-500 font-bold">{ title }</h2>
        <h3 className="text-3xl font-normal mb-20 mt-4 text-pink-200">{ stack }</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} className="overflow-y-auto h-96 border-2 border-pink-100 px-6 pt-5"/>
        <div className="flex justify-center mt-5">
          <Link to="/projects" className="py-2 px-8 border-purple-700 border-2 hover:bg-purple-700 hover:text-white rounded-md text-xl">Back</Link>
        </div>
      </div>
    </Layout>
  )
}
export default ProjectDetails

export const query = graphql`
  query GetSpecifiedMarkdown($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        create_time
      }
    }
  }
`