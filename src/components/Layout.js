import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Content } from 'bloomer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navbar from '../components/Navbar'
import './all.sass'

library.add(fab)

const TemplateWrapper = ({ children, helmet, title }) => (
  <div>
    { helmet && helmet.length > 0
      ? <Helmet title={`${helmet} | PPL`} />
      : <Helmet title="Pulsar Premier League" />
    }
    <Navbar />
    { title && title.length > 0 &&
      <Content>
        <h2 className="has-text-weight-bold is-size-2" style={{marginBottom: "1rem"}}>{title}</h2>
      </Content>
    }
    {children}
  </div>
)

TemplateWrapper.propTypes = {
  helmet: PropTypes.string,
  title: PropTypes.string
}

export default TemplateWrapper