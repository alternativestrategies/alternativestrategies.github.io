import React, {Component} from 'react';
import AOS from 'aos';

class About extends Component {
    componentDidMount(){
        AOS.init({
          duration: 1000,
          startEvent: 'scroll',
          once: false
        })
      }
    
    render(){
        return(
            <section className="about" id="about">
                <h2 data-aos="fade-up" > 
                    My name is Arely, I am a software engineer based in Charlotte, NC. I am passionate about solving problems and facing new challenges.
                </h2>
            </section>
        );
    }
}

export default About;