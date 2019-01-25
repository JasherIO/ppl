
export const LevelBase = (props) => {
  const { children, classes } = props
  const allClasses = classes.join(' ')

  return (
    <div className={allClasses} {...props}>
      {children}
    </div>
  )
}

export const Level = (props) => {
  const { isMobile } = props
  
  let classes = []
  if (isMobile)
    classes.append("is-mobile")

  const allClasses = ["level", ...classes]

  return <LevelBase classes={allClasses} {...props} />
}

export const LevelLeft = (props) => {
  const { classes } = props
  const allClasses = ["level-left", ...classes]

  return <LevelBase classes={allClasses} {...props} />
}

export const LevelRight = (props) => {
  const { classes } = props
  const allClasses = ["level-right", ...classes]

  return <LevelBase classes={allClasses} {...props} />
}
