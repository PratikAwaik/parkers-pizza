import React from "react";
import { Link } from "react-router-dom";

const Pizza = ({ pizza }) => {
  return (
    <Link to={`/pizza/${pizza.id}`} className="shadow-lg p-6 w-72 m-8">
      <img
        className="w-40 h-40 object-cover mx-auto"
        src={pizza.img_url}
        alt={pizza.description}
      />
      <h3 className="text-2xl font-bold my-6">{pizza.name}</h3>
      <div className="flex items-center">
        <i className="ri-star-s-fill mr-1 text-theme-orange-300"></i>
        <span className="text-gray-500">{pizza.rating}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-lg">
          Rs. <span className="text-2xl font-bold">{pizza.price}</span>
        </span>
        <div className="p-1 bg-theme-orange-300">
          <i className="ri-add-line text-white text-lg"></i>
        </div>
      </div>
    </Link>
  );
};

export default Pizza;
