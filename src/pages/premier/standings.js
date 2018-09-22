import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'
import Table from '../../components/Standings/Table'

import blue from '../../../static/data/premier/standings/blue.json'
import orange from '../../../static/data/premier/standings/orange.json'

const PremierStandingsPage = () => (
  <Layout>
    <section className="section has-background-white is-rounded">
      <Helmet title={`Premier | Standings`} />
      
      <h5 className="title is-5" style={{marginBottom: "0.5rem"}}>Blue Conference</h5>
      <Table data={blue.data} />

      <br />

      <h5 className="title is-5" style={{marginBottom: "0.5rem"}}>Orange Conference</h5>
      <Table data={orange.data} />
    </section>
  </Layout>
)

export default PremierStandingsPage