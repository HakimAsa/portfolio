// components/ui/button.tsx
export function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 rounded bg-purple-700 text-white hover:bg-purple-800 transition"
      {...props}
    >
      {children}
    </button>
  )
}
