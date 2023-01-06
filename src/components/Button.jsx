import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }) {
  const {bgColour = 'dodblue-800', hoverColour = 'dodblue-900', textColour = 'white', ...rest} = props
  className = clsx(
    'inline-flex justify-center rounded-2xl p-4 ext-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
    className,
      `bg-${bgColour} hover:bg-${hoverColour} text-${textColour}`,
  )

  return href ? (
    <Link href={href} className={className} {...rest} />
  ) : (
    <button className={className} {...rest} />
  )
}
