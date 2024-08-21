import React, { useState, useCallback } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import About from '../../components/about/about';

const Home = () => {
  const [category, setCategory] = useState("All");
  const memoizedSetCategory = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <About/>
      <ExploreMenu category={category} setCategory={memoizedSetCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;