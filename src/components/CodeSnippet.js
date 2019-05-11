import React from 'react'

function CodeSnippet(props) {
  return (
    <React.Fragment>
      <pre className="rdt-code-text pb-3">
        <code>
          {props.children}
        </code>
      </pre>
    </React.Fragment>
  )
}

export default CodeSnippet
