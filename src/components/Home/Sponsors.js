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

// const Card = ({ sponsor }) => (
//   <figure className="image is-1b1">
//     <img src={sponsor.img} alt={sponsor.title} />          
//     <figcaption className="has-text-centered">
//       <p className="title is-5">
//         {sponsor.description}
//       </p>
//       <a href={sponsor.href} class="button is-primary is-outlined">Visit Website</a>
//     </figcaption>
//   </figure>
// )

// const Section = () => (
//   <section className="section bg-hexellence">
//     <div className="container is-narrow">
//       <p className="title is-4">Sponsored By</p>

//       <div className="columns">
        
//         {sponsors.map((sponsor) => { 
//           return (
//             <div className="column is-one-third" key={sponsor.id}>
//               <Card sponsor={sponsor} />
//             </div>
//           )
//         })}

//       </div>
//     </div>
//   </section>
// )

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
  <section className="section bg-hexellence" style={{ padding: '1rem 1.5rem' }}>
    <div className="container">
      <Level />
    </div>
  </section>
)

export default Section