import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import IndexAnimation from "../components/IndexAnimation"
import IndexStatic from "../components/IndexStatic"
import IndexAnimateTwo from "../components/IndexAnimateTwo"
import IndexVisibilitySensor from "../components/IndexVisibilitySensor"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ height: "1000px" }} />
      {/* <IndexAnimation /> */}
      {/* <IndexStatic />
      <IndexAnimateTwo /> */}
      <IndexVisibilitySensor />
    </Layout>
  )
}

export default IndexPage
