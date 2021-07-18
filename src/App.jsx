import React from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Newsletter from './components/Newsletter';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Showcase />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
