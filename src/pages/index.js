// import "../../node_modules/intersection-observer/intersection-observer"
import "intersection-observer"
import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { useInView } from "react-intersection-observer"
import gsap from "gsap"

const IndexPage = () => {
  const [alreadyRan, toggleRan] = useState(false)
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  const moveTheStuff = e => {
    const astronaut = document.querySelector(".astronaut")

    // gsap.to(".astronaut-1", {
    //   x: 600,
    //   duration: 3,
    //   ease: "back(6)",
    // })

    // gsap.to(".astronaut-2", {
    //   x: 600,
    //   duration: 3,
    //   ease: "linear",
    // })

    console.log("RUNNING THE ANIMATION!!!!")

    gsap.to(".ass", {
      x: 500,
      stagger: {
        each: 0.1,
      },
    })

    toggleRan(true)
  }

  let tween

  useEffect(() => {}, [])

  const playGsap = () => tween.play()
  const pauseGsap = () => tween.pause()
  const reverseGsap = () => tween.reverse()
  const restartGsap = () => tween.restart()

  const startTheAnimationOfTheAstronauts = () => {
    if (inView && !alreadyRan) moveTheStuff()
  }

  startTheAnimationOfTheAstronauts()

  console.log("IntersectionObserver:  ", window.IntersectionObserver)

  return (
    <Layout inView={inView}>
      <SEO title="Home" />
      <div>start === {inView.toString()}</div>
      <div>
        The animation has ran === {alreadyRan.toString()}
        {alreadyRan && ` and it will never run again!`}
      </div>
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
      {/* <div
        className="ass astronaut-4"
        style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div>
      <div
        className="ass astronaut-5"
        style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}
      >
        <Image />
      </div> */}
      {/* <button
        id="play"
        onClick={e => {
          moveTheStuff(e)
          // playGsap(e)
        }}
      >
        play
      </button>
      <button
        id="pause"
        onClick={e => {
          pauseGsap(e)
        }}
      >
        pause
      </button>
      <button
        id="reverse"
        onClick={e => {
          reverseGsap(e)
        }}
      >
        reverse
      </button>
      <button
        id="restart"
        onClick={e => {
          restartGsap(e)
        }}
      >
        restart
      </button> */}
      <Link to="/page-2/">Go to page 2</Link>
      <div className="push" style={{ paddingBottom: `200px` }}>
        start === {inView.toString()}
      </div>

      <div className="itemToSee" ref={ref}>
        <h1>HELLO!! START THE ANIMATION PLEASE === {inView.toString()}</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
