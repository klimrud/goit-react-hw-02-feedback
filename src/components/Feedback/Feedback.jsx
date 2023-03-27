import { Component } from 'react';
// import { Notification } from './Notification';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions.jsx';
import { Statistics } from 'components/Feedback/Statistics.jsx';
import css from 'components/Feedback/Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleClickGood = () => {
   
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
   
    this.countTotalFeedback(this.state.total);
   

    this.countPositiveFeedbackPercentage(this.state.positivePercentage);
  };

  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
   
    this.countTotalFeedback(this.state.total);
  
    this.countPositiveFeedbackPercentage(this.state.positivePercentage);
  };

  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));

    this.countTotalFeedback(this.state.total);
    this.countPositiveFeedbackPercentage(this.state.positivePercentage);
  };
  
  countTotalFeedback() {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
    return this.state.total;
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevState => ({
      positivePercentage: Math.ceil((prevState.good / prevState.total) * 100),
    }));
    return this.state.positivePercentage;
  }

  render() {
     const {good, neutral, bad, total, positivePercentage } = this.state;
    return (
     
      <div className={css.containers}>
         {/* <Notification message="There is no feedback">ппп</Notification> */}
        <h2>Please leave feedback</h2>
        
        <FeedbackOptions
          onGood={this.handleClickGood}
          onNeutral={this.handleClickNeutral}
          onBad={this.handleClickBad}
        />
        { good === 0 && neutral===0 && bad===0 ? (<p>No feedback given</p>):(
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        /> 
          )} 
        {/* <div className={css.statistics}>
          <p>Statistics</p>
          <span>Good:{this.state.good}</span>
          <span>Neutral:{this.state.neutral}</span>
          <span>Bad:{this.state.bad}</span>
          <span>Total:{this.state.total}</span>
          <span>Positive feedback:{this.state.positiveFeedback}%</span>
        </div> */}
      </div>
    );
  }
}
