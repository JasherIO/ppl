import React from 'react'
import Social from './Social'

const Footer = () => (
  <footer className="section container footer" style={{ 
    marginBottom: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem"
  }}>
    <div className="content has-text-centered">
      <Social />
      <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <p>
        Developed by <a href="https://jasher.io">Jasher</a>
      </p>
    </div>
  </footer>
)

export default Footer