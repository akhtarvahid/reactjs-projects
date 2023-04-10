import React from 'react'
import { BookWrapper } from './book.style'
import Button from './styled/Button'
import Input from './styled/Input'
import Form from './styled/Form'

export default function SearchBook() {
  return (
    <BookWrapper margin='30px 0 30px 0'>
      <Form>
        <Input placeholder='Search book' name="book" />
        <Button type='submit' text='Submit' />
      </Form>
    </BookWrapper>
  )
}
