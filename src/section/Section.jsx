import React ,{useState, useRef}from 'react';
import"./section.css";
import { BsFillCalendar2HeartFill, BsPinAngleFill } from 'react-icons/bs';
import adlux from "../img/adlux.jpeg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Section() {


  return (
    <>
   <div>
  <section className="section">
    <h2 className="sub-heading">Save the Date</h2>
    <p className="sub-p">
      Love fills a life time, and a life time begins this hour when the two of us  begin a new life together💕
    </p>
  </section>
  <section className="section">
    <h2 className="sub-heading">The Details</h2>
    <div className="details">
      <BsFillCalendar2HeartFill/>
   
      <h3 className="details-heading">Wedding </h3>
      <p  className="sub-p">On 12th January  2020</p>
      <p  className="sub-p">Friday</p>
    <span>9am</span>
    </div>
    <div className="details">
    < BsPinAngleFill />
    
      <h3 className="details-heading">Location</h3>
      <p className="sub-p"><a href='https://www.google.com/maps/place/Adlux+International+Convention+Center/@10.235311,76.3701621,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0806adca2f98e9:0x5102c59ae7833f04!8m2!3d10.235311!4d76.372737!16s%2Fg%2F12647d0s5?entry=ttu'>Angamaly, Cable Junction, Ernakulam District, National Highway 47, Karukutty, Kerala 683576</a></p>
      <img className="resort-image" src={adlux} alt="Resort" />
    </div>

   
    <div className="details">
      <h3 className="details-heading">Join Us to Celebrate🎉🥂</h3>
    </div>
   
  </section>
</div>

  </>
  )
}

export default Section
