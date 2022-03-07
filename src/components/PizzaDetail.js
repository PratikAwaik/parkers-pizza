import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "./Modal";

const PizzaDetail = () => {
  const [pizzaDetail, setPizzaDetail] = useState({});
  const { id } = useParams();
  const pizzas = useSelector((state) => state.pizzas);

  useEffect(() => {
    const foundPizza = pizzas.find((pizza) => pizza.id === Number(id));
    if (foundPizza) {
      setPizzaDetail(foundPizza);
    }
  }, [id, pizzas]);

  return (
    <div className="max-w-2xl mx-auto my-16 p-8 h-full">
      <div className="h-full">
        <div className="mr-5 w-2/3 mb-4 h-full">
          <img
            className="w-full h-full object-cover"
            src={pizzaDetail.img_url}
            alt={pizzaDetail.description}
          />
        </div>

        <div>
          <h3 className="font-bold text-2xl mb-2">{pizzaDetail.name}</h3>
          <p className="text-gray-500 mb-2">{pizzaDetail.description}</p>
          <div className="flex items-center mb-2">
            <i className="ri-star-s-fill mr-1 text-theme-orange-300"></i>
            <span className="text-gray-500">{pizzaDetail.rating}</span>
          </div>
          {pizzaDetail.isVeg ? (
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 border-2 mr-2 border-green-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
              </div>
              <span className="text-green-600 font-bold">Veg</span>
            </div>
          ) : (
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 border-2 mr-2 border-red-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
              </div>
              <span className="text-red-600 font-bold">Non Veg</span>
            </div>
          )}
          <span className="text-gray-500 text-lg">
            Rs. <span className="text-2xl font-bold">{pizzaDetail.price}</span>
          </span>

          {pizzaDetail.size && pizzaDetail.toppings && (
            <Modal pizza={pizzaDetail} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;
