import Image from 'next/image'
import logo from '../../../public/asacode_logo.png'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between py-8 mx-10">
      <Link href="/">
        <Image
          width={50}
          height={50}
          src={logo}
          alt="logo"
          className="rounded-full"
        />
      </Link>
      <div className="flex space-x-2">
        {[
          { href: '/blog', label: 'Blog' },
          { href: '#contact', label: 'Contact' },
          { href: '#about', label: 'A propos' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-purple-900 hover:underline hover:underline-offset-8 hover:font-bold transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
