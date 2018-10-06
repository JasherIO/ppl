import React from 'react'

// See My Recent Work http://mattfarley.ca

const Section = () => {
  return (
    <section className="section">
      <div className="container is-narrow">
        <p className="title is-4">Sponsored By</p>

        <div className="columns">
          
          <div className="column is-one-third">
            <figure className="image is-1b1">
              <img src='/img/AllYours.png' alt='All Yours Buffet' />          
              <figcaption className="has-text-centered">
                <p className="title is-5">
                  All the colored eggs you could ever want!
                </p>
                <a href="https://google.com" class="button is-primary is-outlined">Visit Website</a>
              </figcaption>
            </figure>
          </div>

          <div className="column is-one-third">
            <figure className="image is-1b1">
              <img src='/img/WhatASave.png' alt='What a Save Esports' />          
              <figcaption className="has-text-centered">
                <p className="title is-5">
                  The cost cutting esports organization saving the world!
                </p>
                <a href="https://google.com" class="button is-primary is-outlined">Visit Website</a>
              </figcaption>
            </figure>
          </div>

          <div className="column is-one-third">
            <figure className="image is-1b1">
              <img src='/img/EggingGrocers.png' alt='Egging Grocers' />          
              <figcaption className="has-text-centered">
                <p className="title is-5">
                  Egg Grocers! Just do it! #JorbyApproved
                </p>
                <a href="https://google.com" class="button is-primary is-outlined">Visit Website</a>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section