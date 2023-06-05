import style from './Chip.module.scss';

interface ChipProps {
  label: string;
}

export function Chip({
  label,
}: ChipProps) {
  return (
    <div className={style.root}>{label.toLowerCase()}</div>
  )
}
