import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Navbar from './Navbar'
import { IAllSite } from '../interface'

const Layout: React.FC = ({ children }) => {
  const data: IAllSite = useStaticQuery(graphql`
    query GetCopyrightAndAuthor {
      site {
        siteMetadata {
          copyright
          author
        }
      }
    }
  `)
  const { copyright, author } = data.site.siteMetadata
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="content">
        {/* content for each page */}
        { children }
      </div>
      <footer className="fixed -bottom-0 h-10 w-screen flex justify-center items-center shadow-lg border-gray-200 border-t-2 border-dotted">
        <p>{copyright}&nbsp;&nbsp;
          <span className="text-red-300 font-semibold">{author}</span>
        </p>
      </footer>
    </div>
  )
}
export default Layout