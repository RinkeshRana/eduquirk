import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

function NicheWorks() {
  const industries = {
    "On Demand": "/industries/OnDemandImg.png",
    "Real Estate": "/industries/realEstate.png",
    "Pharma & Health Care": "/industries/PharmaHealth.png",
    "Fitness & Wellness": "/industries/FitnessWellness.png",
    "News & Entertainment": "/industries/newsEntertainment.png",
    "E-Commerce": "/industries/ECommerce.png",
    "Sports & Gamers": "/industries/sportsGames.png",
    "Banking & Finance": "/industries/BankingFinance.png",
    "Social Networking": "/industries/socialNetworking.png",
    Education: "/industries/education.png",
    Manufacturing: "/industries/Manufacturing.png",
  };

  return (
    <div>
      <h3 className="text-center dark:text-white text-xl md:text-3xl tracking-wider mb-10 flex-row mt-12">
        Projects across various industries include...{" "}
      </h3>
      <div className="grid md:grid-cols-3 justify-items-center w-4/5 items-center gap-5 mx-auto">
        {Object.keys(industries).map((industry, index) => (
          <div
            key={index}
            strength={300}
            className={`hover:scale-110 duration-300`}
          >
            <div>
              <img
                src={`${industries[industry]}`}
                alt={`Work ${index}`}
                className="w-full h-full object-cover rounded-sm"
              />
              <span>
                <h3 className="text-center dark:text-white text-xl md:text-2xl tracking-wider mb-10 flex-row mt-2">
                  {industry}
                </h3>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NicheWorks;
