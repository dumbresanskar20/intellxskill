import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  'aria-label'?: string
  id?: string
  style?: React.CSSProperties
}

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  children,
  className,
  disabled,
  type = 'button',
  onClick,
  id,
  'aria-label': ariaLabel,
  style,
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700 relative overflow-hidden select-none cursor-pointer active:scale-[0.97]'

  const variants = {
    primary:
      'bg-[#1E3A8A] text-white hover:bg-[#152B6B] shadow-md hover:shadow-lg',
    secondary:
      'bg-[#F97316] text-white hover:bg-[#EA6B0A] shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white',
    ghost:
      'text-[#1E3A8A] hover:bg-blue-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-label={ariaLabel}
      id={id}
      style={style}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </>
      )}
    </button>
  )
}
