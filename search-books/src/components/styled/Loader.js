import React from 'react'
import { StyledLoader, StyledLoaderCircle } from './index.style'

export default function Loader() {
  return (
    <StyledLoader>
        <StyledLoaderCircle size="100" title="Loading..." style={{marginRight:'12px'}}/> 
    </StyledLoader>
  )
}
