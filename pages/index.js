import React from "react";
import Footer from "../components/Footer";
import Contact from "../components/index/Contact";
import Features from "../components/index/Features";
import Feedbacks from "../components/index/Feedbacks";
import Hero from "../components/index/Hero";
import Needs from "../components/index/Needs";
import Navbar from "../components/Navbar";

function index() {
  return (
    <div className=" dark:bg-[#181818] relative scroll-p-96 font-gordita transition-all">
      <div className="bg-gradient-to-b from-purple-800 to-cyan-500 absolute blur-3xl w-full h-8 rotate-45 transition-colors" />
      <section className="sticky top-0 z-50">
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section className="relative overflow-hidden md:overflow-visible">
        <Needs />
        <div className="bg-cyan-500 opacity-20 absolute blur-3xl w-32 md:w-56 h-56 rotate-45 transition-colors overflow-hidden top-20 right-96" />
        <div className="bg-pink-500 opacity-20 absolute blur-3xl w-32 md:w-56 h-56 rotate-45 transition-colors overflow-hidden bottom-1 left-64" />
      </section>
      <section>
        <Features />
      </section>
      <div className=" absolute blur-2xl w-1/4 h-4 left-30 md:left-60 bg-gradient-to-r from-red-600  to-yellow-500/70 -rotate-45" />
      <section className="hidden">
        <Feedbacks />
      </section>

      <div className="bg-gradient-to-br from-purple-800 to-blue-800 absolute blur-xl w-32 md:w-96 h-5 -rotate-45 md:rotate-12 md:left-96" />
      <section>
        <Contact />
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </div>
  );
}

export default index;
