import React from 'react';
import { DynamicStar } from 'react-dynamic-star';
import '../stylesheets/courses.css'

function Courses({ courses }) {
  const showCourse = courses.map((e) => {
    return (
      <div className='card-deck' key={e.id}>
        <div className="card" id='courses-container'>
          <div className="card-header" id='title-container'>
            <a className="card-title nav-link active" id='title' href={`https://www.udemy.com${e.url}`} target='_blank' rel='noopener noreferrer'>
              {e.title}
            </a>
            <p className="card-text" id='platform'>({e.platform})</p>

          </div>

          <div className="card-body" id='description-container'>
            <p className='card-text' id='description'>{e.description}</p>
            <a className='card-text' id='instructor' href={`https://www.udemy.com${e.url_instructor}`} target='_blank' rel='noopener noreferrer'>
              {e.instructor}
            </a>
            <div className='rating-container'>
              <p className='card-text' id='rating'>{e.rating.toFixed(1)}</p>
              <DynamicStar rating={e.rating.toFixed(1)} totalStars={5} outlined={true} width={15} height={15} />
              <p className='card-text' id='suscribers'>({e.suscribers})</p>
            </div>
            <p className='card-text' id='price'>{e.price}</p>
          </div>
        </div>

      </div>
    )
  });

  return (
    <>
      {showCourse}
    </>

  );
}

export default Courses