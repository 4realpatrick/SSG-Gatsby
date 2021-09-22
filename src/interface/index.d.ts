export interface ISite {
  id: string
  siteMetadata: {
    title: string,
    description: string,
    author: string,
    copyright: string,
    contact: string
  }
}
export interface IAllSite {
  site: ISite
}
export interface IAllMarkdownRemark {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        slug: string
        stack: string
        title: string
      },
      id: string
    }[]
  }
  site: ISite
}
export interface ISinglePicQuery {
  file: {
    childImageSharp: {
      fluid: {
        aspectRatio: number
        base64: string
        sizes: string
        src: string
        srcSet: string
      }
    },
    id: string
  }
}