import React from 'react'
import { StyledText } from './index.style'

export default function Text({
  children,
  color,
  fontSize,
  margin,
  padding
}) {
  return (
    <StyledText color={color} fontSize={fontSize} margin={margin} padding={padding}>
      {children}
    </StyledText>
  )
}
