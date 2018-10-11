import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

// const sponsors = [
//   {
//     'id': 1,
//     'title': 'All Yours Buffet',
//     'description': 'All the colored eggs you could ever want!',
//     'img': '/img/AllYours.png',
//     'href': 'https://google.com'
//   },
//   {
//     'id': 2,
//     'title': 'What a Save Esports',
//     'description': 'The cost cutting esports organization saving the world!',
//     'img': '/img/WhatASave.png',
//     'href': 'https://google.com'
//   },
//   {
//     'id': 3,
//     'title': 'Egging Grocers',
//     'description': 'Egg Grocers! Just do it! #JorbyApproved',
//     'img': '/img/EggingGrocers.png',
//     'href': 'https://google.com'
//   }
// ]

const Level = ({ sponsors }) => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4">Sponsored By</p>
      </div>
    </div>
    <div className="level-right">
      {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="level-item">
            <figure className="image is-96x96 is-hidden-touch">
              <OutboundLink href={sponsor.link}>
                <img src={sponsor.img} alt={sponsor.name} />
              </OutboundLink>
            </figure>
            <figure className="image is-48x48 is-hidden-desktop">
              <OutboundLink href={sponsor.link}>
                <img src={sponsor.img} alt={sponsor.name} />
              </OutboundLink>
            </figure>
          </div>
        )
      )}
    </div>
  </div>
)

const Section = ({ data }) => {
  const { sponsors } = data.markdownRemark.frontmatter

  return (
    <section className="section is-small background is-hexellence">
      <div className="container">
        <Level sponsors={sponsors} />
      </div>
    </section>
  )
}

const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "sponsor-post" } }) {
      frontmatter {
        sponsors {
          name
          img
          link
        }
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <Section data={data} {...props} />} />
)