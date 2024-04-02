import React, { useState } from 'react'

import styles from './styles.module.css'

export default function MagneticButton ({ text, to, clr }) {

  const [transformStyles, setTransformStyles] = useState({
    transform: 'translateX(0px) translateY(0px)',
    '--x': '0px',
    '--y': '0px',
  })

  let animationFrameId = null

  function handleMouseMove (e) {
    cancelAnimationFrame(animationFrameId)

    animationFrameId = requestAnimationFrame(() => {
      const x = e.nativeEvent.offsetX,
        y = e.nativeEvent.offsetY
      const transX = x - e.target.clientWidth / 2
      const transY = y - e.target.clientHeight / 2

      const mx = e.pageX - e.target.offsetLeft
      const my = e.pageY - e.target.offsetTop

      const newStyles = {
        transform: `translateX(${transX}px) translateY(${transY}px)`,
        '--x': `${mx}px`,
        '--y': `${my}px`,
      }

      setTransformStyles(newStyles)
    })
  }

  function handleMouseOut () {
    cancelAnimationFrame(animationFrameId)
    const newStyles = {
      transform: '',
      '--x': `0px`,
      '--y': `0px`,
    }

    setTransformStyles(newStyles)
  }

  return (
    <a href={to}
      className={styles.btn}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseOut={handleMouseOut}
      style={transformStyles}
    >
      <span>{text}</span>
    </a>
  )
}