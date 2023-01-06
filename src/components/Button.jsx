import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-dodblue-900 p-4 text-base font-semibold text-white hover:bg-dodblue-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dodblue-500 active:text-white/70',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
