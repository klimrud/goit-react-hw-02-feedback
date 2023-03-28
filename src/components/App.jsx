import { Component } from 'react';
import { Section } from './Feedback/Section.jsx';
import { FeedbackOptions } from './Feedback/FeedbackOptions.jsx';
import { Statistics } from './Feedback/Statistics.jsx';
import { Notification } from './Feedback/Notification.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // const values =  Object.values(this.state)keys

  onLeaveFeedback = keys => {
    // console.log('e', keys);
    this.setState(prevState => ({ [keys]: prevState[keys] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    // this.setState(prevState => ({
    //   positivePercentage: Math.ceil((prevState.good / prevState.countTotalFeedback()) * 100),
    // }));
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Feedback widget">
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
          </Section>
          {this.countTotalFeedback() ===0 ? (<><h3 >No feedback given</h3> <Notification message="There is no feedback" /></>) :
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>}
        </Section>
      </div>
    );
  }
}

//   render(){
//     // const {good, neutral, bad } = this.state;
//   return (
//     <div>
//      <p>Feedback widget</p>
//      <Section title= 'Please leave feedback'>
//       <Feedback />
//      {/* </Section>
//       <Section title= 'Statistics'>
//       <Statistics good={good}
//           neutral={neutral}
//           bad={bad}/>  */}
//      </Section>
//     </div>
//   );
//   }
// };
