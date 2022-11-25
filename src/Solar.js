import React, {useEffect} from 'react';
import "./Solar.css";

export default function Solar(props) {
   
  return (
    <div>

<section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={props.image} alt="" />
          <div className="tex">
          <h1 >{props.heading}</h1>
          <p >{props.par}</p>
         
          </div>
          <div  className="button">
            <button  className='btn btn-3'>{props.btn1}</button>
            <button className='btn btn-4'>{props.btn2}</button>
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
