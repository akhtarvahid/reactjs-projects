import React from 'react'
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({ children, buttonType, ...restProps }) => {
  return (
    <button 
       className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
       {...restProps}>
      {children}
    </button>
  )
}

export default Button;