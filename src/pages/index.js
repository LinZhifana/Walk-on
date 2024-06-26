import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageHeader from '../components/HomepageHeader'


export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="just notes<head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  )
}
