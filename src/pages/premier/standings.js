import React from 'react'
import Layout from '../../components/Layout'
import Table from '../../components/Standings/Table'

import blue from '../../../static/data/premier/standings/blue.json'
import orange from '../../../static/data/premier/standings/orange.json'

const PremierStandingsPage = () => (
  <Layout helmet="Premier Standings" title="Premier Standings">
    <h5 className="title is-5" style={{marginBottom: "0.5rem"}}>Blue Conference</h5>
    <Table data={blue.data} />

    <br />

    <h5 className="title is-5" style={{marginBottom: "0.5rem"}}>Orange Conference</h5>
    <Table data={orange.data} />
  </Layout>
)

export default PremierStandingsPage