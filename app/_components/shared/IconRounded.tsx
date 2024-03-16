import React, { ReactNode } from 'react'
import Icon from './Icon';


type Props = {
  icon: ReactNode;
  w?: string
  h?: string
  bg?: boolean
  className?: string
}

export default function IconRounded({
  icon,
  w = 'w-12',
  h = 'h-12',
  bg = false,
  className = '',
}: Props) {
  return (
    <Icon path={icon} w={w} h={h} size="24" className={`rounded-full bg-gray-50 dark:bg-slate-800 text-black ${className}`} />
  )
}
