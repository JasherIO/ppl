import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

const posts = [
  {
    'id': 1,
    'img': '/img/Batmobile.jpg',
    'title': 'Season 4: Week 1 In Review',
    'category': 'Review',
    'date': '2018-10-04 09:30:00+07:00'
  },
  {
    'id': 2,
    'img': '/img/XDevil.jpg',
    'title': 'Week 1 Schedule Released',
    'category': 'News',
    'date': '2018-10-01 09:30:00+07:00'
  },
  {
    'id': 3,
    'img': '/img/GrandChampion.png',
    'title': 'Season 4 Kicks Off December 1st!',
    'category': 'News',
    'date': '2018-09-25 09:30:00+07:00'
  }
]

const Level = () => (
  <div className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <p className="title is-4">Recent News</p>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <Link to="/news" className="button is-primary is-outlined">
          View All News
        </Link>
      </div>
    </div>
  </div>
)

const Card = (post) => (
  <div className="column" key={post.id}>
    <div className="card">
      <div className="card-image">
        <figure className="image is-16by9">
          <img src={post.img} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="title is-4">{post.title}</p>
          <p className="subtitle is-6">
            <span className="has-text-primary is-uppercase has-text-weight-semibold">{post.category}</span>
            &nbsp;
            <time dateTime={post.date} className="has-text-weight-light">{moment(post.date).fromNow()}</time>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Section = () => (
  <section className="section">
    <div className="container">
      <Level />

      <div className="columns">
        {posts.map(Card)}
      </div>
    </div>
  </section>
)

export default Section

