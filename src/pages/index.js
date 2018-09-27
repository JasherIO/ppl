import React from 'react'
import Layout from '../components/Layout'
import { Card, CardContent, CardImage } from 'bloomer'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout helmet="Home">
        <Card style={{ borderRadius: '10px' }}>
          <CardImage>
            <figure className="image">
              <img src='/img/register.png' alt="Cover" />
            </figure>
          </CardImage>
          <CardContent>
            Blah
          </CardContent>
        </Card>
      </Layout>
    )
  }
}
