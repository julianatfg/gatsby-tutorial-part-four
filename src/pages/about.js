import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({data}) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <h3>{data.site.siteMetadata.subtitle}</h3>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>

      <p>
          Hi. This is me, Jules. Trying to understand this thing. I'm not sure I know how to do all this by myself.
      </p>
    </Layout>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title, subtitle
      }
    }
  }
`