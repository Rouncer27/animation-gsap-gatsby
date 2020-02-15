import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

const IndexStatic = () => {
  return (
    <div>
      <div
        className="ass astronaut-1"
        style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div>
      <div
        className="ass astronaut-2"
        style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div>
      <div
        className="ass astronaut-3"
        style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <div className="push" style={{ paddingBottom: `200px` }}>
        Nope no animations. Please update your browser.
      </div>

      <div className="itemToSee">
        <h1>
          HELLO!! START THE ANIMATION PLEASE === Nope no animations. Please
          update your browser.
        </h1>
      </div>
    </div>
  )
}

export default IndexStatic
