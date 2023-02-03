import { useContext, useEffect } from 'react';
import Hero from './components/home/Hero';
import Featured from './components/home/Featured';
import UpcomingAuction from './components/home/UpcomingAuction';
import ExplorePages from './components/home/ExplorePages';
import TopCreators from './components/home/TopCreators';

const Home = () => {
  useEffect(() => {
    document.title = 'Artsy | Home';
  }, []);

  return (
    <>
      <Hero />

      <Featured />

      <UpcomingAuction />

      <ExplorePages />

      <TopCreators />
    </>
  );
};

export default Home;
