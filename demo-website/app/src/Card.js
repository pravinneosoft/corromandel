import React from 'react';
import { NavLink } from 'react-router-dom';
    const Card=(props)=>{
  return (
      <>
    <div className='col-4'>
      <div className="card ">
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <NavLink to="#" className="card-title">{props.title}</NavLink>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="#" className="btn btn-outline-info rounded">
           Read More
          </NavLink>
        </div>
      </div>
    </div>
    </>
  );
}
export default Card;