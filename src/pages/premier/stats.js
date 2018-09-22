import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

const PremierStatsPage = () => (
  <Layout>
    <section className="section">
      <Helmet title={`Stats | Premier`} />
      <div>Premier Stats</div>
    </section>
  </Layout>
)

export default PremierStatsPage