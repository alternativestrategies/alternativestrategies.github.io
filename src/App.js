import React, {Component} from 'react';
import Header from './Components/Header/';
import Showcase from './Components/Showcase/';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import About from './Components/About';

class App extends Component {
  state = { loading: true };

  // sleep and wait are functions that allow the loader to appear
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  // this function sets state.loading as false so loading will end
  wait = async (milliseconds) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    })
  }

  // wait will run as soon as component mounts 
  componentDidMount(){
    this.wait(1500)
  }

  render(){
    if (this.state.loading) return <Loader />
    return (
      <>
      <Header />
      <Showcase />
      <About />
      <Footer/>
      </>
    );
  }
}

export default App;
