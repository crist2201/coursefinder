import React from 'react';
import { DynamicStar } from 'react-dynamic-star';
import '../stylesheets/courses.css'

function Courses({ courses }) {
  const showCourse = courses.map((e, i) => {
    return (
      <div className="card">
        <div className='title-container'>
          <a className='title' href={`https://www.udemy.com${e.url}`} target='_blank'>{e.title}</a>
          <p className='platform'> ({e.platform}) </p>
          <p id='rating'>{e.rating.toFixed(1)}</p>
          <DynamicStar rating={e.rating.toFixed(1)} totalStars={5} outlined={true} emptyStarColor='#023047' width={20} height={20} />
        </div>
        <div className='description-container'>
          <a className='instructor' href={`https://www.udemy.com${e.url_instructor}`} target='_blank'> {e.instructor}</a>
          <p className='description'>{e.description}</p>
          <p className='price'>{e.price}</p>
        </div>
      </div >
    )
  });

  return (
    <>
      {showCourse}
    </>

  );
}

export default Courses