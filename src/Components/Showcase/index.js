import React, { Component } from 'react';
import Main from './Main';
import proj from './data.json';
import AOS from 'aos';

class Showcase extends Component{
  componentDidMount(){
    AOS.init({
      duration: 1000,
      once: false
    })
  }

  render(){
    return(
      <section data-aos='fade-in' id="showcase">
      <h2>Showcase</h2>
      <Main />
      <div data-aos='fade-in' className="projects">
      {proj.map((p, i) => {
          return <div key={i} className="projects-grid">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="btn-group">
            <a href={p.live}>
            <button className="projects-btn">
              Live
              </button>
            </a>
            <a href={p.code}>
              <button className="projects-btn">Code</button>
            </a>
          </div>
          <ul>
            <li>{p.skill}</li>
          </ul>
          </div>
          })
      }
      </div>
      </section>
    )
  }
}

export default Showcase;
