import React from 'react'

function HeaderMainContent(props) {
  return (
    <React.Fragment>
      <h1 className="rdt-heading text-center pb-5">{props.children}</h1>
    </React.Fragment>
  )
}

export default HeaderMainContent
