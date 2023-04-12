import React from 'react'
import { BookWrapper, Card } from './book.style'
import Text from './styled/Text'

export default function BookList({
  result
}) {
  console.log(result)
  return (
    <BookWrapper display='block'>
      <div>
        <Text fontSize='30px' margin='0 0 0 30px'>Total result found: {result.totalItems}</Text>
      </div>
      <div>
        {result?.items?.map(item => 
         <div key={item.id}>
           <Card>
            <div>
              <img src={item.volumeInfo?.imageLinks?.thumbnail} alt={item.volumeInfo.title} style={{height: 100}} />
            </div>
            <div>
              <div>{item.volumeInfo.title}</div>
              <div>{item.volumeInfo.subtitle}</div>
              <div>{item.volumeInfo.description}</div>
            </div>
           </Card>
         </div>  
        )}
      </div>
    </BookWrapper>
  )
}
