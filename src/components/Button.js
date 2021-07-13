import './Button.css'

import { Link } from 'react-router-dom'
import React from 'react'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSizes,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSizes = SIZES.includes(buttonSizes) ? buttonSizes : SIZES[0]

  return (
    <Link to="/" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}
