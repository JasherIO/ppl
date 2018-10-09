import React from 'react'

const sponsors = [
  {
    'id': 1,
    'title': 'All Yours Buffet',
    'description': 'All the colored eggs you could ever want!',
    'img': '/img/AllYours.png',
    'href': 'https://google.com'
  },
  {
    'id': 2,
    'title': 'What a Save Esports',
    'description': 'The cost cutting esports organization saving the world!',
    'img': '/img/WhatASave.png',
    'href': 'https://google.com'
  },
  {
    'id': 3,
    'title': 'Egging Grocers',
    'description': 'Egg Grocers! Just do it! #JorbyApproved',
    'img': '/img/EggingGrocers.png',
    'href': 'https://google.com'
  }
]

const Level = () => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4">Sponsored By</p>
      </div>
    </div>
    <div className="level-right">
      {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="level-item">
            <figure className="image is-96x96 is-hidden-touch">
              <a href={sponsor.href}>
                <img src={sponsor.img} alt={sponsor.title} />
              </a>
            </figure>
            <figure className="image is-48x48 is-hidden-desktop">
              <a href={sponsor.href}>
                <img src={sponsor.img} alt={sponsor.title} />
              </a>
            </figure>
          </div>
        )
      )}
    </div>
  </div>
)

const Section = () => (
  <section className="section is-small background is-hexellence">
    <div className="container">
      <Level />
    </div>
  </section>
)

export default Section