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
            <a href="https://mern-product-page.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <button className="projects-main-btn">Live</button>
            </a>
            <a href="https://github.com/alternativestrategies/mern-product-page" target="_blank" rel="noopener noreferrer">
          <button className="projects-main-btn">Code</button>
            </a>
          </div>
            <span>JSON, AJAX, Axios</span>
            </div>
        </div>
        </div>
    );
}

export default Main;