import React from 'react';

const ProductData = [
  {
    id: 1,
    name: 'Apple iPhone 14 Plus | 128GB Purple',
    image: 'https://img.zoommer.ge/zoommer-images/thumbs/0174207_apple-iphone-14-plus-128gb-purple_550.jpeg',
    cost: '2 799 ₾',
  },
  {
    id: 2,
    name: 'Google Pixel 7 5G 8/128GB Snow',
    image: 'https://img.zoommer.ge/zoommer-images/thumbs/0177583_google-pixel-7-5g-8128gb-snow_550.jpeg',
    cost: '1 649 ₾',
  },
  {
    id: 3,
    name: 'Samsung Galaxy S22 5G S901E/DS 8/128 Phantom Black',
    image: 'https://img.zoommer.ge/zoommer-images/thumbs/0163965_samsung-galaxy-s22-5g-s901eds-8128-phantom-black_550.jpeg',
    cost: '1 699 ₾',
  },
];

const ProductListing = () => {
  return (
    <div>
      <h2 className='sheni-chanta' >YOUR BAG</h2>
      {ProductData.map((product) => (
        <div className='mtelitelefoni'>
        <img src={product.image} alt="foto" className='Phone-photo' />
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.cost}</p>
          <button className='moshoreba'>remove</button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
