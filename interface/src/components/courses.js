import React from 'react';
import { DynamicStar } from 'react-dynamic-star';
import '../stylesheets/courses.css'

function Courses({ courses }) {
  const showCourse = courses.map((e, i) => {
    return (
      <div className='courses-container'>
        <p className='description'>{e.description}</p>
        <h3 className='instructor'>{e.instructor}</h3>
        <p className='price'>$ {e.price}</p>
        <a className='url' href={e.url}>Link to the course</a>

        <div className='info-container'>
          <h2 className='title'>{e.title}  </h2>
          <h2 className='platform'> ({e.platform}) </h2>
          {/* <h3 className='rating'>{e.rating}</h3> */}
          <DynamicStar className='rating' rating={parseFloat(e.rating)} totalStars={5} outlined={true} width={20} height={20} />
        </div>
      </div>

    )
  });

  return (
    <div >
      {showCourse}
    </div>
  );
}

export default Courses