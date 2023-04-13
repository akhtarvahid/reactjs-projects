import React, { useState } from 'react'
import Loader from './components/styled/Loader';
import BookList from './components/BookList';
import SearchBook from './components/SearchBook';
import BookHeader from './components/BookHeader';
import { fetchApi } from './utils/api';
import { useEffect } from 'react';

export default function Home() {
  const [searchedText, setSearchedText] = useState('');
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(()=>{
    fetchApi('programming language')
    .then(res => {
      if(res) {
        setResult(res);
        setIsLoading(false);
      }
    });
  },[])

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
    <>
        <BookHeader />
        <SearchBook
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          isSubmitting={isLoading}
        />
        {isLoading ? <Loader /> : <BookList result={result} />}
    </>
  )
}
