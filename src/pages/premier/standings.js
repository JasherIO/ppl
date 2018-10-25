import React from 'react'
import Helmet from 'react-helmet'
import Table from '../../components/Table'

import blue from '../../../static/data/premier/standings/blue.json'
import orange from '../../../static/data/premier/standings/orange.json'

const PremierStandingsPage = () => (
  <>
    <Helmet>
      <title>Premier Standings</title>
    </Helmet>

    <section className="section">
      <div className="container">
        <h1 className="title is-3">Premier Standings</h1>

        <p className="subtitle is-5">Blue Conference</p>
        <Table data={blue.data} />

        <p className="subtitle is-5">Orange Conference</p>
        <Table data={orange.data} />
      </div>
    </section>
  </>
)

export default PremierStandingsPage