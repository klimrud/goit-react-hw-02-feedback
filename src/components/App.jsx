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
      1 - Feedback widget
      <Feedback />
    </div>
  );
  }
};

// export const App = () => {
//   return (
//     <div>
//       1 - Feedback widget
//       <Feedback />
//     </div>
//   );
// };
