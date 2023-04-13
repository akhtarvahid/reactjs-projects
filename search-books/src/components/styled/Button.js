import React from 'react'
import { StyledButton } from './index.style'

export default function Button({
  type,
  text,
  onClick,
  disabled
}) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>{text}</StyledButton>
  )
}
