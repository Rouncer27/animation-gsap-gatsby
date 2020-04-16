import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import VisibilitySensor from "react-visibility-sensor"
import gsap from "gsap"

const IndexVisibilitySensor = props => {
  const [alreadyRan, toggleRan] = useState(false)
  let tween

  const moveTheStuff = e => {
    gsap.to(".ass", {
      x: 500,
      stagger: {
        each: 0.1,
      },
    })

    toggleRan(true)
  }

  const playGsap = () => tween.play()
  const pauseGsap = () => tween.pause()
  const reverseGsap = () => tween.reverse()
  const restartGsap = () => tween.restart()

  const onChange = isVisible => {
    console.log("isVisible: ", isVisible)
    if (isVisible && !alreadyRan) moveTheStuff()
  }

  return (
    <VisibilitySensor onChange={onChange}>
      <div>
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
      </div>
    </VisibilitySensor>
  )
}

export default IndexVisibilitySensor
