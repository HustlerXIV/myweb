import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <>
      <div className="cards">
        <a href="" className="card">
          <img
            src="https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000"
            className="card-image"
            alt=""
          />
          <div className="card-overlay">
            <div className="card-header">
              <svg className="card-arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>

              <div className="card-header-text">
                <h3 className="card-title">Test</h3>
                <span className="card-status">test</span>
              </div>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis?
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
