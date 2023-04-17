import React, { useEffect, useRef } from "react"

// Hover Effect
import hoverEffect from "hover-effect"

export default function Home() {

  const imageRef = useRef(null)

  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: imageRef.current,
      intensity: .3,
      image1: "./images/img-1.jpg",
      image2: "./images/img-2.jpg",
      displacementImage: "./images/overlay.png"
    })

    console.log("Hello")
  }, [])

  return (
    <div className="container">
      <div className="item">
        <div className="item-header">
          <div className="item-heading__1">Road Distortion</div>
          <div className="item-heading__2">02/03</div>
        </div>
        <div className="item-image" ref={imageRef}></div>
        <div className="item-footer">
          <div className="item-footer__quote">Liquid Distortion!</div>
        </div>
      </div>
    </div>
  )
}