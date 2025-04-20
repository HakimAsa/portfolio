import { Props } from '@/props/GlobalProps'

// components/ui/button.tsx
export function Button({ children, ...props }: Props) {
  return (
    <button
      className="px-4 py-2 rounded bg-purple-700 text-white hover:bg-purple-800 transition"
      {...props}
    >
      {children}
    </button>
  )
}
