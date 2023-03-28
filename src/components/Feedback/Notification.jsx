export const Notification = ({ message = 'There is no feedback' }) => {
  // console.log('hi');
  // Notiflix.Notify.info('There is no feedback');
  return alert(message);
  // return Notiflix.Notify.info(message);
};
