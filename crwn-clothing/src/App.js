import React from 'react';
// import './App.css';
import data from './data.json'
import './categories.styles.scss';

const App = () => {


  return (
    <div className="categories-container">
      {data.map(category => 
        <div className='category-container' key={category.id}>
          <div className='background-image'/>
          <div className='category-body-container'>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
          </div>
        </div>
        )}
    </div>
  );
}

export default App;
