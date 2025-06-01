'use client' // This marks the file as a Client Component
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { Project } from './components/project'
import { Footer } from './components/footer'
import { Header } from './components/header'

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
    <main className="p-6 max-w-4xl mx-auto space-y-10 text-gray-800 dark:text-gray-100 dark:bg-gray-900 bg-white transition-colors duration-300">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-300">
          Akim Ayena Soule Amidou
        </h1>
        <p className="text-lg mt-2">
          Développeur Full-Stack -- NodeJS | PHP | Python | Angular | React |
          Next.js
        </p>
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
      </section>

      <Project />

      <section
        id="about"
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">💡 À propos</h2>
        <p>
          Développeur frontend passionné, je conçois des interfaces performantes
          et élégantes avec React, Next.js, TypeScript et Tailwind CSS. J’aime
          contribuer à des produits ambitieux et collaborer dans des équipes
          réduites, agiles, et ultra-communiquantes. Je m’investis autant dans
          la qualité du code que dans l’expérience utilisateur.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">📬 Contact</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            className="w-full p-2 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full p-2 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
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
    </main>
  )
}
