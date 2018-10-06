import React from 'react'
import Layout from '../../components/Layout'
import Table from '../../components/Standings/Table'

import blue from '../../../static/data/premier/standings/blue.json'
import orange from '../../../static/data/premier/standings/orange.json'

const PremierStandingsPage = () => (
  <Layout helmet="Premier Standings">
    <section className="section">
      <div className="container">
        <p className="title is-3">Premier Standings</p>

        <p className="subtitle is-5">Blue Conference</p>
        <Table data={blue.data} />

        <p className="subtitle is-5">Orange Conference</p>
        <Table data={orange.data} />
      </div>
    </section>
  </Layout>
)

export default PremierStandingsPage