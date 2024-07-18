import React from 'react'
import Directory from '../../components/directory/directory.component';
import data from '../../utils/data.json';

const Home = () => {
  return (
    <Directory data={data} />
  )
}
export default Home;
