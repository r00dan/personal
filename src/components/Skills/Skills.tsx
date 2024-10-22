import { Chip } from "components";

import style from "./Skills.module.scss";

const common = ["typescript", "javascript"];
const frontend = [
  "react",
  "react-native",
  "expo",
  "recoil",
  "mobx",
  "apollo",
  "graphql",
];
const backend = [
  "node.js",
  "nest.js",
  "postgresql",
  "sqlite",
  "typeorm",
  "redis",
  "nats",
];
const languages = ["english", "russian"];
const other = ["docker"];

const skills = [...common, ...frontend, ...backend, ...other, ...languages];

export function Skills() {
  return (
    <div className={style.root}>
      {skills.map((skill, index) => (
        <Chip key={`${index}-${skill}`} label={skill} />
      ))}
    </div>
  );
}
