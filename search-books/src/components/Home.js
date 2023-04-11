import React, { useState } from 'react'
import { Wrapper } from './home.style'
import SearchBook from './SearchBook'
import BookList from './BookList'
import BookHeader from './BookHeader'
import { fetchApi } from '../utils/api'

export default function Home() {
  const [searchedText, setSearchedText] = useState('');
  const [result, setResult] = useState({});
  const handleChange = e => {
     setSearchedText(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    fetchApi(searchedText)
    .then(res => setResult(res));
  }
  return (
    <Wrapper>
        <BookHeader />
        <SearchBook 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
        <BookList result={result} />
    </Wrapper>
  )
}
