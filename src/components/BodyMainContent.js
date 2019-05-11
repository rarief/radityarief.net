import React from 'react'

function BodyMainContent(props) {
  return (
    <React.Fragment>
      <p className="rdt-body-text pb-3">
        {props.children}
      </p>
    </React.Fragment>
  )
}

export default BodyMainContent
