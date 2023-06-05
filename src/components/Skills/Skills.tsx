import { Chip } from "components";

import style from './Skills.module.scss';

const common = ['javascript', 'typescript'];
const frontend = ['react', 'recoil', 'mobx'];
const backend = ['nest.js', 'postgresql', 'typeorm'];
const languages = ['english', 'russian'];
const other = ['docker'];

const skills = [...common, ...frontend, ...backend, ...other, ...languages, ];

export function Skills() {
  return (
    <div className={style.root}>
      {skills.map((skill, index) => (
        <Chip
          key={`${index}-${skill}`}
          label={skill}
        />
      ))}
    </div>
  )
}
