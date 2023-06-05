import { Avatar, Bio, Skills, Socials, Divider } from 'components';

import style from './App.module.scss';

export function App() {
  return (
    <div className={style.root}>
      <h1>Bogdan Rudenko</h1>
      <h3>Full-stack web developer</h3>
      <Avatar />
      <Socials />
      <Divider />
      <Bio />
      <Divider />
      <Skills />
    </div>
  )
}
