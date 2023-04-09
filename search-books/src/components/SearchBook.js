import React from 'react'
import { BookWrapper } from './book.style'

export default function SearchBook() {
  return (
    <BookWrapper>
        <form>
            <input type='text' placeholder='Search book'/>
        </form>
    </BookWrapper>
  )
}
