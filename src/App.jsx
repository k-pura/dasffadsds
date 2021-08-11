import './App.css';
import React from 'react';
import HockeyTeam from './componenets/HockeyTeam/HockeyTeam';
import hockey from './pic.jpg';
import HockeyPic from './componenets/HockeyPic/HockeyPic';

class App extends React.Component {
  state = {
    healthPoints1: 100,
    healthPoints2: 100,
    status: "Gloves are off!",
  };
  
  handleHealthPoints1() {
    this.setState({
      healthPoints2: this.state.healthPoints2-1,
      status: ("What A Miss!")
    });
  };

  handleHealthPoints2() {
    this.setState({
      healthPoints1: this.state.healthPoints1-10,
      status: "Spittin' Chicklets"
    });
  };

  render() {
    return (
      <div classname="app">
      <h1>Edmonton Oilers vs. Calgary Flames</h1>
      <HockeyPic pic={hockey} />
        <div className="teams">
          <div className="calgary">
            <HockeyTeam name={"Calgary"} hitpoint={this.state.healthPoints1}/>
          </div>
          <div className="edmonton">
            <HockeyTeam name={"Edmonton"} hitpoint={this.state.healthPoints2} />
          </div>
        </div>
      <br />      
      <button onClick={()=> this.handleHealthPoints1()} >Throw a Punch</button>
      <button onClick={() => this.handleHealthPoints2()}>Throw a Punch</button>
      <h2>
        <br/>
        Status: {this.state.status}  
      </h2>    
    
      </div>
    )
  }
}

export default App;