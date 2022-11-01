import React from "react";
import Footer from "../components/Footer";
import Features from "../components/index/Features";
import Feedbacks from "../components/index/Feedbacks";
import Hero from "../components/index/Hero";
import Needs from "../components/index/Needs";
import Navbar from "../components/Navbar";

function index() {
  return (
    <div className="bg-[#181818] relative scroll-p-96 font-gordita">
      <div className="bg-gradient-to-b from-purple-800 to-cyan-500 absolute blur-3xl w-full h-8 rotate-45 transition-colors" />
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Needs />
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
        <Footer />
      </section>
    </div>
  );
}

export default index;
