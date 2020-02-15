import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import IndexAnimation from "../components/IndexAnimation"
import IndexStatic from "../components/IndexStatic"
import IndexAnimateTwo from "../components/IndexAnimateTwo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <IndexAnimation />
      <IndexStatic />
      <IndexAnimateTwo />
    </Layout>
  )
}

export default IndexPage
