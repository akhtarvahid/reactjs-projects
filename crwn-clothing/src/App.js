import React from 'react';
// import './App.css';
import data from './data.json'
import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';

const App = () => {


  return (
    <div className="categories-container">
      {data.map(category => 
        <CategoryItem 
          key={category.id} 
          category={category}
         />
      )}
    </div>
  );
}

export default App;
