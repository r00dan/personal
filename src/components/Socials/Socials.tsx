import {
  TbBrandTwitter,
  TbBrandGithub,
  TbBrandFacebook,
  TbBrandTelegram,
  TbBrandLinkedin,
  TbBrandDiscord,
} from 'react-icons/tb';

import { MdWorkOutline } from 'react-icons/md';

import { HiOutlineMail } from 'react-icons/hi';

import { Link } from "components";

import style from './Socials.module.scss';

const links = [
  {
    label: "Linkedin",
    value: "https://www.linkedin.com/in/rudenko-bogdan/",
    icon: <TbBrandLinkedin />,
  },
  {
    label: "Github",
    value: "https://github.com/r00dan",
    icon: <TbBrandGithub />,
  },
  {
    label: "Discord",
    value: "https://discordapp.com/users/294108445190389770",
    icon: <TbBrandDiscord />,
  },
  {
    label: "Twitter",
    value: "https://twitter.com/hotcodepink",
    icon: <TbBrandTwitter />,
  },
  {
    label: "Facebook",
    value: "https://facebook.com/roodan.dev/",
    icon: <TbBrandFacebook />,
  },
  {
    label: "Telegram",
    value: "https://t.me/lurkingbo",
    icon: <TbBrandTelegram />,
  },
  {
    label: "Email",
    value: "mailto:lurkingbo@gmail.com",
    icon: <HiOutlineMail />,
  },
  {
    label: "CV",
    value: "/cv.pdf",
    icon: <MdWorkOutline />,
  },
];

export function Socials() {
  return (
    <div className={style.root}>
      {links.map(({ label, value, icon }) => (
        <Link
          key={label}
          text={label}
          href={value}
          icon={icon}
        />
      ))}
    </div>
  )
}
