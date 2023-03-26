import { Component } from 'react';
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
    // const total = 0
    // const positivePercentage= 0
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    // this.setState(prevState => ({
    //   total: prevState.total + 1,
    // }));
    this.countTotalFeedback(this.state.total);
    // this.setState(prevState => ({
    //   positivePercentage: Math.ceil((prevState.good / prevState.total) * 100),
    // }));

    this.countPositiveFeedbackPercentage(this.state.positivePercentage);
  };

  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    // this.setState(prevState => ({
    //   total: prevState.total + 1,
    // }));
    this.countTotalFeedback(this.state.total);
    // this.setState(prevState => ({
    //   positivePercentage: Math.ceil((prevState.good / prevState.total) * 100),
    // }));
    this.countPositiveFeedbackPercentage(this.state.positivePercentage);
  };

  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));

    // countTotalFeedback =() => {
    // this.setState(prevState => ({
    //   total: prevState.total + 1,
    // }));
    // }

    // this.setState(prevState => ({
    //   positivePercentage: Math.ceil((prevState.good / prevState.total) * 100),
    // }));
    this.countTotalFeedback(this.state.total);
    this.countPositiveFeedbackPercentage(this.state.positivePercentage);
  };
  //  state = { visible: false,};

  // toggle =()=> {
  //   this.setState(prevState =>({ visible: !prevState.visible,}));
  // };
  countTotalFeedback() {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
    console.log('total1', this.state.total);
    return this.state.total;
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevState => ({
      positivePercentage: Math.ceil((prevState.good / prevState.total) * 100),
    }));
    console.log('first1', this.state.positivePercentage);
    return this.state.positivePercentage;
  }

  render() {
    return (
      <div className={css.containers}>
        <h2>Please leave feedback</h2>
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
        <FeedbackOptions
          onGood={this.handleClickGood}
          onNeutral={this.handleClickNeutral}
          onBad={this.handleClickBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
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
