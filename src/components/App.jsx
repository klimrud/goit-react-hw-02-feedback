import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render(){
  return (
    <div>
     <p>Feedback widget</p>
     <Feedback />
    </div>
  );
  }
};
