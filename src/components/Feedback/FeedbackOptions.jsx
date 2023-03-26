import css from 'components/Feedback/FeedbackOptions.module.css'
// import { Component } from 'react';
// import PropTypes from 'prop-types';
// export class FeedbackOptions extends Component {

//   options={

//   }

//   onLeaveFeedback={}

//   render({onGood, onNeutral, onBad}){
//       return(<div className={css.container}>
//     <button type="click" onClick={onGood}>
//       Good
//     </button>
//     <button type="click" onClick={onNeutral}>
//       Neutral
//     </button>
//     <button type="click" onClick={onBad}>
//       Bad
//     </button>
//   </div>);
//   }
// }






export const FeedbackOptions = ({onGood, onNeutral, onBad}) => {
  return(<div className={css.containerBtn}>
    <button className={css.btnGreen} type="click" onClick={onGood}>
      Good
    </button>
    <button className={css.btnBlue} type="click" onClick={onNeutral}>
      Neutral
    </button>
    <button className={css.btnRed} type="click" onClick={onBad}>
      Bad
    </button>
  </div>);
}