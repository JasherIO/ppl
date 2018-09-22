import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

const PremierPage = () => (
  <Layout>
    <section className="section">
      <Helmet title={`Premier`} />
      <div>Premier</div>
    </section>
  </Layout>
)

export default PremierPage