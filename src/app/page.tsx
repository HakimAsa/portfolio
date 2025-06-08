'use client' // This marks the file as a Client Component
import { useState } from 'react'
import Link from 'next/link'

import { Button } from '@/app/components/ui/button'
import { Project } from './components/project'
import AvatarWithAnimatedBorder from './components/avatarWithAnimatedBorder'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      'Merci pour votre message ! (fonctionnalité à intégrer avec un service réel)'
    )
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-b from-purple-400 dark:from-gray-900 to-white dark:to-gray-900 text-center overflow-hidden">
        <div className="flex flex-col gap-2 items-center justify-center sm:flex-row sm:gap-6 sm:py-4">
          <AvatarWithAnimatedBorder />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-purple-900 dark:text-purple-300">
                Akim Ayena Soule Amidou
              </p>
              <p className="font-medium text-gray-500">
                Développeur Full-Stack web-mobile
              </p>
            </div>
          </div>
        </div>
        <p className="text-md">Autonome, rigoureux et orienté produit</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Button asChild>
            <Link href="#projects">Projets</Link>
          </Button>
          <Button
            variant="outline"
            asChild
          >
            <Link
              href="/cv.pdf"
              target="_blank"
            >
              Télécharger CV
            </Link>
          </Button>
        </div>
        {/* Chevron Down */}
        <Link
          href="#about"
          className="absolute left-1/2 -translate-x-1/2 bottom-20 animate-bounce text-purple-700 dark:text-purple-300"
          aria-label="Scroll to about section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>
      </section>

      {/* MAIN CONTENT */}
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-4xl mx-auto space-y-10">
          <Project />

          <section
            id="about"
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">💡 À propos</h2>
            <p>
              Développeur frontend passionné, je conçois des interfaces
              performantes et élégantes avec React, Next.js, TypeScript et
              Tailwind CSS. J’aime contribuer à des produits ambitieux et
              collaborer dans des équipes réduites, agiles, et
              ultra-communiquantes. Je m’investis autant dans la qualité du code
              que dans l’expérience utilisateur.
            </p>
          </section>

          <section
            id="contact"
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">📬 Contact</h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                className="w-full p-2 rounded border border-purple-400 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                type="text"
                name="name"
                placeholder="Votre nom"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="w-full p-2 rounded border border-purple-400 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                type="email"
                name="email"
                placeholder="Votre email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="w-full p-2 rounded border border-purple-400 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
                name="message"
                placeholder="Votre message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <Button type="submit">Envoyer</Button>
            </form>
            <p>💻 github.com/akimayena</p>
            <p>📍 Cotonou, Bénin</p>
          </section>
        </div>
      </main>
    </>
  )
}
