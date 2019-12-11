import React, { Component } from 'react';
import Navigation from './Navigation';
import AOS from 'aos';

class Header extends Component {
  componentDidMount(){
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    })
  }

  render(){
    return (
      <section data-aos='fade-in' className="head">
        <Navigation/>
        <div className="head-text">
        <h1>Arely Guevara</h1>
        <p>Software Engineer</p>
        </div>
      </section>
    );
  }
}

export default Header;
