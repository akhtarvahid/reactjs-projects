import React from 'react'
import Directory from '../../components/directory/directory.component';
import data from '../../utils/data.json';
import Footer from '../../components/footer/footer';
import Carousel from '../../components/carousel/carousel';
const Home = () => {
  return (
    <>
    <Directory data={data} />
    <Carousel />
    <Footer />
    </>
  )
}
export default Home;
