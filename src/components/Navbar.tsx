import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { IAllSite } from '../interface'
const Navbar: React.FC = () => {
  // use query in components
  // query后面命名随意 但是大写开头且不能重复
  const data:IAllSite = useStaticQuery(graphql`
    query GetSiteInfo {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav className="flex w-screen h-14 items-center shadow-lg text-lg font-semibold">
      <h1 className="ml-5 text-2xl text-purple-700 capitalize">{ title }</h1>
      <div className="w-full flex justify-end mr-10">
        <Link to="/" className="px-5 hover:border-purple-700 border-b-4 border-white ">Home</Link>
        <Link to="/about" className="px-5 hover:border-purple-700 border-b-4 border-white">About</Link>
        <Link to="/projects" className="px-5 hover:border-purple-700 border-b-4 border-white">Portfolio Projects</Link>
        <Link to="/todos" className="px-5 hover:border-purple-700 border-b-4 border-white">Todos</Link>
      </div>
    </nav>
  )
}
export default Navbar