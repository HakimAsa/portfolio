import { Props } from '@/props/GlobalProps'

// components/ui/card.tsx
export function Card({ children }: Props) {
  return <div className="border rounded-xl shadow p-4 bg-white">{children}</div>
}

interface CardContentProps extends Props {
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`text-sm ${className}`}>{children}</div>
}
