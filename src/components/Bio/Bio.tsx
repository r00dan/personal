import style from './Bio.module.scss';

export function Bio() {
  return (
    <div className={style.root}>
      <div>Name: Bogdan Rudenko</div>
      <div>Age: 30y</div>
      <div>Experience: Over 5y</div>
      <div>Location: Budva, Montenegro</div>
      <div>Education: Bachelor's degree, Computer Science, 2017</div>
      <div>University: Moscow Technical University of Communications and Informatics</div>
    </div>
  )
}
