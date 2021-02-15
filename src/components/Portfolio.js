import React from 'react';
import '../styles/style.css';

function Portfolio(props) {
  return (
    <div id="portfolio">
      <div className="container mt-5">
        <div className="col-4">
          <a href={props.site}>
            <div className="card">
              <img
                src={props.img}
                alt={props.name}
                className="card-img image"
              />
            </div>
            <div className="middle">
              <h4 className="text">{props.name}</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
