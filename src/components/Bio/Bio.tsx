import style from './Bio.module.scss';

export function Bio() {
  return (
    <div className={style.root}>
      <div>Name: Bogdan Rudenko</div>
      <div>Age: 31y</div>
      <div>Experience: Over 7y</div>
      <div>Location: Budva, Montenegro</div>
      <div>Education: Bachelor's degree, Computer Science, 2017</div>
      <div>University: Moscow Technical University of Communications and Informatics</div>
    </div>
  )
}
