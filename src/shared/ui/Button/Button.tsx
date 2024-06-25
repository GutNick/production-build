import './Button.css'
import React from 'react'

interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
}
export const Button = ({ onClick, children }: ButtonProps) => {
  return <button className="button" onClick={onClick}><span className="button__title">{children}</span></button>
}
