import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import Services from "../components/services-comp/Services";
import About from "../components/about/About";
import Process from "../components/process/Process";
import Footer from "../components/footer/Footer";
import ContactUs from "../components/contact-us/ContactUs";
import TestimonialsAndBlogs from "../components/blogs/TestimonialsAndBlogs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
      <Process />
      <TestimonialsAndBlogs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
