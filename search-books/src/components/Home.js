import React, { useState } from 'react'
import { Wrapper } from './home.style'
import SearchBook from './SearchBook'
import BookList from './BookList'
import BookHeader from './BookHeader'
import { fetchApi } from '../utils/api'
import Loader from './styled/Loader'

export default function Home() {
  const [searchedText, setSearchedText] = useState('');
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = e => {
     setSearchedText(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true)
    fetchApi(searchedText)
    .then(res => {
      if(res) {
        setResult(res);
        setIsLoading(false);
      }
    });
  }
  return (
    <Wrapper>
        <BookHeader />
        <SearchBook 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
        {isLoading ? <Loader /> : <BookList result={result} />}
    </Wrapper>
  )
}
