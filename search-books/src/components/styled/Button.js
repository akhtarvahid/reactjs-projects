import React from 'react'
import { StyledButton } from './index.style'

export default function Button({
  type,
  text,
  onClick
}) {
  return (
    <StyledButton type={type} onClick={onClick}>{text}</StyledButton>
  )
}
