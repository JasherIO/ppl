import React from 'react'

const Section = (props) => {
  const { children, className } = props
  const allClasses = "section container " + className

  return (
    <div className={allClasses}>
      {children}
    </div>
  )
}

export const Title = (props) => {
  const { title, size } = props
  
  return (
    <h1 className={`title is-${size}`}>{title}</h1>
  )
}

Title.defaultProps = {
  size: 3
}

export const Level = (props) => {
  const { children, isMobile } = props
  const styles = isMobile ? "level is-mobile" : "level"

  return (
    <div className={styles} style={{ marginBottom: "1rem" }}>
      <div className="level-left">
        <div className="level-item">
          <Title {...props} />
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          {children}
        </div>
      </div>
    </div>
  )
}

Level.defaultProps = {
  isMobile: true
}


export default Section
