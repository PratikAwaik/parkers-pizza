import React from "react";
import Navbar from "./Navbar";
import landingImg from "../images/landing.jpg";
import PizzaList from "./PizzaList";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className="main-section flex items-center justify-between w-full bg-theme-orange-100 mt-14">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4">
            <h1 className="text-6xl mb-6">
              Best & <span className="text-theme-orange-300">Fastest</span>{" "}
              <br />
              Pizza Delivery
            </h1>
            <p className="text-gray-500">
              Lorem ipsum is simply a dummy text of the printing and he is gent
              typesetting industry. Lorem ipsum one the dummy text of the
              printing.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="mx-8 w-1/2 flex items-center justify-center">
          <img
            className="w-2/4 h-2/4 rounded-lg"
            src={landingImg}
            alt="Delicious Pizza with all the toppings"
            loading="eager"
          />
        </div>
      </section>

      <PizzaList />
    </div>
  );
};

export default Home;
