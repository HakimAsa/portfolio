import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white p-2">
      <div className="flex w-80 justify-around">
        <Link href="https://github.com/HakimAsa">GitHub</Link>
        <Link href="https://github.com/HakimAsa">LinkedIn</Link>
        <Link href="https://github.com/HakimAsa">GitLab</Link>
      </div>
      <hr className="mr-7 ml-7" />
      <p className="text-center">Akim Ayena</p>
    </footer>
  )
}
