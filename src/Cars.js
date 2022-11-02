import React, {useEffect} from 'react';
import "./Cars.css"
import AOS from "aos";
import  "aos/dist/aos.css";

export default function Cars(props) {
    useEffect(() => {
        AOS.init()
      
    }, []);
  return (
    <div>

<section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src={props.image} alt="" />
          <div className="text">
          <h1  data-aos="zoom-in">{props.heading}</h1>
          <p  data-aos="zoom-in">{props.para}</p>
          </div>
          <div  className="buttons">
            <button  className='btn btn-1'>{props.btn1}</button>
            <button className='btn btn-2'>{props.btn2}</button>
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
