import React, { useState } from "react";
import Popup from "reactjs-popup";

const Modal = ({ pizza }) => {
  const size = pizza.size[0];
  const toppings = pizza.toppings[0];
  const [sizeRadioSelected, setSizeRadioSelected] = useState(null);
  const [toppingsRadioSelected, setToppingsRadioSelected] = useState(null);
  const [toppingsCheckboxes, setToppingsCheckboxes] = useState([]);

  const isToppingChecked = (toppingToCheck) => {
    return toppingsCheckboxes.find((topping) => topping === toppingToCheck)
      ? true
      : false;
  };

  const handleToppingChange = ({ target }) => {
    if (isToppingChecked(target.value)) {
      const newToppingsCheckboxes = [...toppingsCheckboxes].filter(
        (topping) => topping !== target.value
      );
      setToppingsCheckboxes(newToppingsCheckboxes);
    } else {
      const newToppingsCheckboxes = [...toppingsCheckboxes].concat(
        target.value
      );
      setToppingsCheckboxes(newToppingsCheckboxes);
    }
  };

  return (
    <Popup
      trigger={
        <button className="flex items-center bg-theme-orange-300 p-3 my-4">
          <i className="ri-add-line text-white mr-2"></i>
          <span className="text-white">Add to Cart</span>
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal p-4">
          <button
            className="close w-full flex items-center justify-end"
            onClick={close}
          >
            <i className="ri-close-line text-2xl text-theme-orange-300"></i>
          </button>
          <div className="header font-bold text-2xl mb-4">Add {pizza.name}</div>
          <div className="content text-lg">
            <span className="font-bold">{size.title}: </span>
            <div className="mb-6">
              {size.items.map((sizeItem) => (
                <label key={sizeItem.size} className="block">
                  <input
                    type="radio"
                    className="mr-2"
                    value={sizeItem.size}
                    checked={sizeRadioSelected === sizeItem.size}
                    onChange={({ target }) =>
                      setSizeRadioSelected(target.value)
                    }
                  />
                  {sizeItem.size}
                </label>
              ))}
            </div>

            <span className="font-bold">{toppings.title}</span>
            {toppings.isRadio ? (
              <div>
                {toppings.items.map((topping) => (
                  <label key={topping.name} className="block">
                    <input
                      type="radio"
                      className="mr-2"
                      value={topping.name}
                      checked={toppingsRadioSelected === topping.name}
                      onChange={({ target }) =>
                        setToppingsRadioSelected(target.value)
                      }
                    />
                    {topping.name}
                  </label>
                ))}
              </div>
            ) : (
              <div>
                {toppings.items.map((topping) => (
                  <label key={topping.name} className="block">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={topping.name}
                      checked={isToppingChecked(topping.name)}
                      onChange={handleToppingChange}
                    />
                    {topping.name}
                  </label>
                ))}
              </div>
            )}
          </div>

          <button className="text-white flex items-center bg-theme-orange-300 px-4 py-2 my-4">
            <i className="ri-add-line mr-2"></i>
            <span>Add</span>
          </button>
        </div>
      )}
    </Popup>
  );
};

export default Modal;
