import React from 'react'
import Social from './Social'

const Footer = () => (
  <footer className="section container footer" style={{ 
    marginBottom: "2rem",
    paddingTop: "2rem",
    paddingBottom: "1rem"
  }}>
    <div className="content has-text-centered">
      <Social />
      <hr style={{ marginBottom: "1rem" }} />
      <p>
        Developed by <a href="https://jasher.io">Jasher</a>. 
        {/* The <a href="https://github.com/JasherIO/ppl">source code</a> is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>. */}
      </p>
      {/* <p>Copyright &copy; 2018-2019</p> */}
    </div>
  </footer>
)

export default Footer