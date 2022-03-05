import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingIcon from "../images/loading.gif";

const PizzaList = () => {
  const [loading, setLoading] = useState(true);
  const pizzas = useSelector((state) => state.pizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_PIZZAS", payload: data });
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <section>
      <div className="my-16">
        <h2 className="text-center text-4xl mb-4">Our Popular Dishes</h2>
        <p className="text-center text-gray-500">
          Lorem ipsum is simply a dummy text of the printing and he is gent
          typesetting industry.
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <img className="w-12 h-12" src={loadingIcon} alt="Loading Icon" />
        </div>
      ) : (
        <div className="max-w-6xl px-5 my-8 mx-auto">
          {pizzas.map((pizza) => (
            <span key={pizza.id}>{pizza.name}</span>
          ))}
        </div>
      )}
    </section>
  );
};

export default PizzaList;
