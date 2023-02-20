import React from 'react'
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ data }) => {
  return (
    <div className="directory-container">
        {data.map(category => 
         <CategoryItem
           key={category.id} 
           category={category}
         />
        )}
     </div>
  )
}
export default Directory;
