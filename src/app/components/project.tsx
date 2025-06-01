import { Card, CardContent } from './ui/card'

export function Project() {
  return (
    <section
      id="projects"
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">🌟 Projets</h2>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold">TM – Task Manager App</h3>
          <p>
            App React Native de gestion de tâches avec authentification,
            multi-langue (next-intl), édition de tâches, animations, et
            notifications.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold">SaaS MIC&Co</h3>
          <p>
            Application web interne avec Next.js, Tailwind, SSR/SSG, design
            system, et internationalisation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold">Système Hotech</h3>
          <p>
            Développement de modules de calendrier et assistant vocal. Réduction
            des bugs de 75 % et encadrement de 7 développeurs.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
