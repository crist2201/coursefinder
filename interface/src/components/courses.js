import React from 'react';
import '../stylesheets/courses.css'

function Courses({ courses }) {
  const showCourse = courses.map((e, i) => {
    return (
      <div className='courses-container' key={i}>
        <h3 className='title'>{e.title}  </h3>
        <h3>{e.platform}</h3>
        <h3>{e.rating}</h3>
        <h4>{e.instructor}</h4>
        <p id='des'>{e.description}</p>
        <p>{e.price}</p>
      </div>
    )

  });

  return (
    <div>
      {showCourse}
    </div>
  );
}

export default Courses