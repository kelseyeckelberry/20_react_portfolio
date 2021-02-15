import React from 'react';
import '../styles/style.css';

function Portfolio(props) {
  return (
    <div id="portfolio">
      <div class="container mt-5">
        <div class="col-4">
          <a href={props.site}>
            <div class="card">
              <img src={props.img} alt={props.name} class="card-img image" />
            </div>
            <div>
              <h4 class="text">{props.name}</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
