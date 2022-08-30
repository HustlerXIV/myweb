import React from "react";

function Card({ title, type, desc, link, img }) {
  return (
    <>
      <a href={link} className="card">
        <div className="cards">
          <img src={img} className="card-image" alt={type} />
          <div className="card-overlay">
            <div className="card-header">
              <svg className="card-arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>
              <div className="card-header-text">
                <h3 className="card-title">{title}</h3>
                <span className="card-status">{type}</span>
              </div>
            </div>
            <p className="card-description">{desc}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default Card;
