import { ReactNode } from 'react';

import style from './Link.module.scss';

interface LinkProps {
  href: string;
  text: string;
  icon?: ReactNode;
  isSelf?: boolean;
}

export function Link({
  href,
  text,
  icon,
  isSelf = false,
}: LinkProps) {
  return (
    <a
      href={href}
      target={isSelf ? '_self' : '_blank'}
      className={style.root}
    >
      {icon && (
        <div className={style.icon}>{icon}</div>
      )}
      {text}
    </a>
  )
}
