import React from 'react';
import Image1 from '../../assets/category/earphone.png';
import Image2 from '../../assets/category/watch.png';
import Image3 from '../../assets/category/macbook.png';
import Button from '../Shared/Button';

const Category = ({handleOrderPopup}) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative flex items-end h-80 p-6">
            <div className="z-10">
              <p className="text-gray-400 mb-1">Enjoy</p>
              <p className="text-2xl font-semibold">With</p>
              <p className="text-4xl font-bold opacity-20">Earphone</p>
              <div onClick={handleOrderPopup}>
              <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
              </div>
            </div>
            <img className="absolute bottom-0 right-0 w-60" src={Image1} alt="Earphone" />
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 text-white rounded-3xl relative flex items-end h-80 p-6">
            <div className="z-10">
              <p className="text-gray-400 mb-1">Enjoy</p>
              <p className="text-2xl font-semibold">With</p>
              <p className="text-4xl font-bold opacity-40">Gadget</p>
              <div onClick={handleOrderPopup}>
              <Button text="Browse" bgColor="bg-white" textColor="text-yellow-400" />
              </div>
            </div>
            <img className="absolute -right-4 top-8 w-60" src={Image2} alt="Watch" />
          </div>
          <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative flex items-end h-80 p-6">
            <div className="z-10">
              <p className="text-gray-400 mb-1">Enjoy</p>
              <p className="text-2xl font-semibold">With</p>
              <p className="text-4xl font-bold opacity-40">Laptops</p>
              <div onClick={handleOrderPopup}>
              <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
              </div>
            </div>
            <img className="absolute -right-4 top-8 w-60" src={Image3} alt="MacBook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
