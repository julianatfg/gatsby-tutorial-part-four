import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({data}) {
  return (
    <Layout>
      <h1>404! 🍁</h1>
        <p>
        You've reached a dead end, mate.
      </p>

      <p>
          Go back whence you came from.
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