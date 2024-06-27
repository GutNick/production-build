import React from 'react'

import './Button.css'

interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
}

/**
 * Button component.
 *
 * This component renders a button with a specified onClick handler and children.
 *
 * @param props - The properties object.
 * @param props.onClick - The function to call when the button is clicked.
 * @param props.children - The content to be displayed inside the button.
 *
 * @returns The rendered button component.
 */
export const Button = ({ onClick, children }: ButtonProps) => {
  return <button className="button" onClick={onClick}><span className="button__title">{children}</span></button>
}
