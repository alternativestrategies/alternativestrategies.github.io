import React, { Component } from 'react';
import AOS from 'aos';

class Footer extends Component{
    componentDidMount(){
    AOS.init({
      duration: 1000,
      mirror: true
    })
  }

    render(){
        return (
        <footer data-aos="flip-right">
            <div>Alternative Strategies</div>

            <div>
                <a href="https://github.com/alternativestrategies">
                Github 
                </a>

                <a href="https://www.linkedin.com/in/arely-guevara/">
                Linkedin 
                </a>

                <a href="https://dribbble.com/arelyguevara">
                Dribble 
                </a>
            </div>

            
        </footer>
        );
    }
}

export default Footer;