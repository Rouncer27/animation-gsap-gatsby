import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollMagic from "scrollmagic"
// import addIndicators from "debug.addIndicators"

const IndexAnimateTwo = () => {
  useEffect(() => {
    console.log(gsap)
    console.log(ScrollMagic)
    const controller = new ScrollMagic.Controller()
    const timeLine = gsap
      .timeline()
      .to(".headline-move", { y: -1000, duration: 3 })
    timeLine.pause()

    new ScrollMagic.Scene({
      duration: 0,
      offset: -500,
      triggerElement: "#boxTrigger",
    })
      .on("enter", function(e) {
        timeLine.play()
      })
      .on("leave", function(e) {
        timeLine.reverse()
      })
      .addTo(controller)
    // .addIndicators()
  }, [])

  return (
    <div id="boxTrigger" className="my-scroll-element">
      <h1 className="headline-move">Hello there!</h1>
    </div>
  )
}

export default IndexAnimateTwo
