import React from 'react'
import { Wrapper } from './home.style'
import SearchBook from './SearchBook'
import BookList from './BookList'
import BookHeader from './BookHeader'

export default function Home() {
  return (
    <Wrapper>
        <BookHeader />
        <SearchBook />
        <BookList />
    </Wrapper>
  )
}
