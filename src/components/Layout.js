import React from 'react'
import Helmet from 'react-helmet'
import { Container } from 'bloomer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navbar from '../components/Navbar'
import './all.sass'

library.add(fab)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <Container style={{marginTop: "1rem"}}>{children}</Container>
  </div>
)

export default TemplateWrapper
