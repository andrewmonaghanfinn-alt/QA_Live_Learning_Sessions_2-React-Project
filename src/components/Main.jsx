import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom'
import '../style.css';


export default function Main() {
  return (
    <div className="main">
      <aside className="main-content">
        <div className="main-text">
          <h1>Bring your home to life</h1>
          <p1>Elevate your living space with a touch of nature.
            <br/>
            We offer a range of easy-care house plants.
          </p1>
          <Link to="/shop">
          <Button />
          </Link>
        </div>

        <img
          src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg"
          alt="Banana plant"
          className="main-image"
        />
      </aside>
    </div>
  );
}