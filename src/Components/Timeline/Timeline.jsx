import React from 'react';
import './Timeline.css';

const Navbar = () => {
  return (
    <div>
      <h1>OL circle cards</h1>
      <ol>
        <li>
          <div className="icon"><i className="fa-solid fa-bicycle" /></div>
          <div className="title">Step 1</div>
          <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-car" /></div>
          <div className="title">Step 2</div>
          <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-helicopter" /></div>
          <div className="title">Step 3</div>
          <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-plane" /></div>
          <div className="title">Step 4</div>
          <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-rocket" /></div>
          <div className="title">Step 5</div>
          <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
        <li>
          <div className="icon"><i className="fa-solid fa-bus" /></div>
          <div className="title">Step 6</div>
          <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
        </li>
      </ol>
      {/* <div className="credits">
        <a target="blank" href="https://www.freepik.com/premium-vector/vector-infographic-design-template-with-icons-8-options-steps_10571883.htm">inspired by</a>
      </div> */}
    </div>
  )
}

export default Navbar;