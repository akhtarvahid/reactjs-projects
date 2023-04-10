import React from 'react'
import { StyledInput } from './index.style'

export default function Input({
  value,
  onChange,
  name,
  placeholder
}) {
  return (
    <StyledInput 
       type='text' 
       name={name} 
       value={value} 
       onChange={onChange} 
       placeholder={placeholder} 
    />
  )
}
