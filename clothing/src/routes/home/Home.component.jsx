import React from 'react'
import Directory from '../../components/directory/directory.component';
import data from '../../utils/data.json';
import Footer from '../../components/footer/footer';

const Home = () => {
  return (
    <>
    <Directory data={data} />
    <Footer />
    </>
  )
}
export default Home;
