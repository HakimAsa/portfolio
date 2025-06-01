import Image from 'next/image'
import globe from '../../../public/globe.svg'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between py-8 mx-10">
      <Link href="/">
        <Image
          src={globe}
          alt="logo"
        />
      </Link>
      <div className="flex space-x-2">
        <Link href="/blog">Blog</Link>
        <Link href="#about">A propos de moi</Link>
      </div>
    </div>
  )
}
