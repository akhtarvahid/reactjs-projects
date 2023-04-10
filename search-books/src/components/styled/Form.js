import React from 'react'
import { StyledForm } from './index.style'

export default function Form({
    onSubmit,
    children
}) {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  )
}
