import React from "react";
import "./UserCard.css";
// import svg1 from "./svg-svgrepo-com.svg";
const MyComponent = () => {
  return (
    <center>
    <div className="card1">
      <div className="card__img1">
       <img src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg" style={{height:"100%",width:"100%", borderRadius: "10px 10px 0px 0px"}} alt="" />
      </div>
      <div className="card__avatar1">
        <img src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg" alt=""  style={{ width: '100%', height: '100%', objectFit: 'cover', clipPath: 'circle(50% at 50% 50%)', }}/>
      </div>
      <div className="card__title1">Cameron Williamson</div>
      <div className="card__subtitle1">Web Development</div>
      <div className="card__wrapper1">
        <button className="card__btn1">Button</button>
        <button className="card__btn1 card__btn-solid1">Button</button>
      </div>
    </div>
    </center>
  );
};

export default MyComponent;
