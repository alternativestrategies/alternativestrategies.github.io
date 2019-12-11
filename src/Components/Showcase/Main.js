import React from 'react';

const Main = () => {
    return (
        <div className="projects-main">
        <img className="image" alt="Arely's Stationary Box site" src="./img/react-product-page.png"/>
        <div className="overlay">
        <div className="text">
            <h3>Arely's Stationary Box</h3>
            <p>This project was an ecommerce app using React, Node, and Express</p>
        <div className="main-group">
          <button className="projects-main-btn">Live</button>
          <button className="projects-main-btn">Code</button>
          </div>
            <span>JSON, AJAX, Axios</span>
            </div>
        </div>
        </div>
    );
}

export default Main;