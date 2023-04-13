import React from 'react'
import { BookWrapper } from './book.style'
import Button from './styled/Button'
import Input from './styled/Input'
import Form from './styled/Form'

export default function SearchBook({
  handleChange,
  handleSubmit,
  isSubmitting
}) {
  return (
    <BookWrapper margin='30px 0 30px 0'>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Search book' name="book" onChange={handleChange}/>
        <Button type='submit' text='Search' disabled={isSubmitting}/>
      </Form>
    </BookWrapper>
  )
}
