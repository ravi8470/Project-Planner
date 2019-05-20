import React from 'react'

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Aute excepteur labore quis esse culpa culpa non magna voluptate dolor exercitation do. Non adipisicing qui et dolore non ad. Duis dolor laborum aliquip eiusmod occaecat ad deserunt minim mollit incididunt laboris. Occaecat nostrud nulla adipisicing amet ut reprehenderit. In est anim sit sit dolore eu. Nulla cupidatat et et sit mollit id amet do aliquip. Ad exercitation ad fugiat esse ex.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Ravi</div>
            <div>2nd Sept, 4am</div>
        </div>
      </div>
    </div>
  )
}
