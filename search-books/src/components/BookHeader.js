import React from 'react'
import { BookTitle, BookWrapper } from './book.style'
import { OpenBook } from '@styled-icons/entypo'

export default function BookHeader() {
  return (
     <BookWrapper>
        <BookTitle> 
          <OpenBook size="48" title="Search book" style={{marginRight:'12px'}}/> 
          Find your books
        </BookTitle>
     </BookWrapper>
  )
}
