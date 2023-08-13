import React, { useState } from "react";

const ProductData = [
  {
    id: 1,
    name: "Apple iPhone 14 plus",
    image:  "https://img.zoommer.ge/zoommer-images/thumbs/0174207_apple-iphone-14-plus-128gb-purple_550.jpeg",
    cost: "2 799 ₾",
    count: 0,
  },
  {
    id: 2,
    name: "Google Pixel 7 ",
    image:  "https://img.zoommer.ge/zoommer-images/thumbs/0177583_google-pixel-7-5g-8128gb-snow_550.jpeg",
    cost: "1 649 ₾",
    count: 0,
  },
  {
    id: 3,
    name: "Samsung Galaxy S22 ",
    image: "https://img.zoommer.ge/zoommer-images/thumbs/0163965_samsung-galaxy-s22-5g-s901eds-8128-phantom-black_550.jpeg",
    cost: "1 699 ₾",
    count: 0,
  },
];

const ProductListing = () => {
  const [productCounts, setProductCounts] = useState({});

  const incrementCount = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const decrementCount = (id) => {
    const updatedCount = Math.max((productCounts[id] || 0) - 1, 0);

    if (updatedCount === 0) {
      const updatedProductCounts = { ...productCounts };
      delete updatedProductCounts[id];
      setProductCounts(updatedProductCounts);
    } else {
      setProductCounts((prevCounts) => ({
        ...prevCounts,
        [id]: updatedCount,
      }));
    }
  };

  const removeProduct = (id) => {
    const updatedProducts = ProductData.filter((product) => product.id !== id);
    const updatedProductCounts = { ...productCounts };
    delete updatedProductCounts[id];

    setProductCounts(updatedProductCounts);
    // Update the ProductData array here
    ProductData.splice(
      ProductData.findIndex((product) => product.id === id),
      1
    );
  };

  return (
    <div>
      <h2 className="sheni-chanta">YOUR BAG</h2>
      {ProductData.map((product) => (
        <div className="mteliyuti" key={product.id}>
          <div className="mtelitelefoni">
            <img src={product.image} alt="foto" className="Phone-photo" />
            <div>
              <h3>{product.name}</h3>
              <p className="fasi">{product.cost}</p>
              <button
                className="moshoreba"
                onClick={() => removeProduct(product.id)}
              >
                remove
              </button>
              <div className="counter-container">
                <div
                  className="counter-button"
                  onClick={() => incrementCount(product.id)}
                >
                  <span className="arrow">▲</span>
                </div>
                <span className="counter-value">
                  {productCounts[product.id] || 0}
                </span>
                <div
                  className="counter-button"
                  onClick={() => decrementCount(product.id)}
                >
                  <span className="arrow">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
