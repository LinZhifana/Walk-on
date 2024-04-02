import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import MagneticButton from '../MagneticButton'
import clsx from 'clsx'

import styles from './styles.module.css'

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Aurore</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <MagneticButton text="Start 🎯" to="docs/intro" />
        </div>
      </div>
    </header>
  )
}
