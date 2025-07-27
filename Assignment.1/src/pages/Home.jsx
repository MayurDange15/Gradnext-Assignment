import React from "react";
import Header from "../components/header";
import Hero from "../components/Hero/hero";
import Testimonials from "../components/testimonials";
import Footer from "../components/Footer/footer";
import CallToAction from "../components/CallToAction/calltoaction";
import Features from "../components/features";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
