import React from 'react'
import { AuthorText, BookWrapper, Card, CardDescription, CardImage, CardTitle } from './book.style'
import Text from './styled/Text'

export default function BookList({
  result
}) {
  console.log(result)
  return (
    <BookWrapper display='block'>
      {result?.items?.length && <Text fontSize='30px' margin='0 0 0 30px'>
        Total result found: {result.totalItems}
      </Text>}
      <div>
        {result?.items?.map(item => 
         <div key={item.id}>
           <Card>
            <CardImage src={item.volumeInfo?.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
            <div>
              <CardTitle>{item.volumeInfo.title}</CardTitle>
              <div>{item.volumeInfo.subtitle}</div>
              <AuthorText>Author: {item.volumeInfo.authors.join(', ')}</AuthorText>
              <CardDescription>{item.volumeInfo.description}</CardDescription>
            </div>
           </Card>
         </div>  
        )}
      </div>
    </BookWrapper>
  )
}
