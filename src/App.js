import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveDarshan from './components/LiveDarshan';
import EventsDetail from './components/EventsDetail';
import OurServices from './components/OurServices';
import OtherServices from './components/OtherServices';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import PoojaBooking from './components/PoojaBooking';
import CarPooja from './components/CarPooja';
import Payment from './components/Payment';
import PreetiBhojSponsor from './components/PreetiBhojSponsor';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const HomePage = () => (
  <>
    <div className="top-maroon-wrapper">
      <div className="header-bg-symbols"></div>
      <Header />
      <Hero />
    </div>
    
    <main>
      <LiveDarshan />
    </main>

    <EventsDetail />
    <OurServices />
    <OtherServices />
    <Gallery />
    <AboutUs />
  </>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/booking">
          <PoojaBooking />
        </Route>
        <Route path="/preeti-bhoj-sponsor">
          <PreetiBhojSponsor />
        </Route>
        <Route path="/car-pooja">
          <CarPooja configKey="carPooja" />
        </Route>
        <Route path="/archana">
          <CarPooja configKey="archana" />
        </Route>
        <Route path="/abhishekam">
          <CarPooja configKey="abhishekam" />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/pooja/:id" render={({ match }) => (
          <CarPooja configKey={match.params.id} />
        )} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
