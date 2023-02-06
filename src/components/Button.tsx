
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'default' | 'purple'
}

export function Button({ children, variant = 'default' }: ButtonProps) {

  const colors = {
    bg: {
      default: 'bg-gradient-to-t from-gray-800 to-gray-900 shadow-md',
      purple: 'bg-gradient-to-t from-violet-800 to-violet-900 shadow-md',
    }
  }

  return (
    <button className={`rounded-full w-16 h-16 ${colors.bg[variant]} text-violet-500 text-2xl shadow-inner shadow-gray-800 hover:brightness-110`}>{children}</button>
  )
}