import React from 'react';
import Image1 from '../../assets/category/gaming.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/speaker.png';
import Button from '../Shared/Button';

const Category2 = () => (
  <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-brandWhite to-brandWhite/90 text-white rounded-3xl relative flex items-end h-80 p-6">
            <div className="z-10">
              <p className="text-gray-900 mb-1">Enjoy</p>
              <p className="text-2xl font-semibold">With</p>
              <p className="text-4xl text-gray-800 font-bold opacity-20">Console</p>
              <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
            </div>
            <img className="absolute bottom-0 right-0 w-60" src={Image1} alt="Earphone" />
          </div>
          <div className="bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl relative flex items-end h-80 p-6">
            <div className="z-10">
              <p className="text-gray-900 mb-1">Enjoy</p>
              <p className="text-2xl font-semibold">With</p>
              <p className="text-4xl font-bold opacity-40">VRs</p>
              <Button text="Browse" bgColor="bg-white" textColor="text-yellow-400" />
            </div>
            <img className="absolute -right-0 top-8 w-60" src={Image2} alt="Watch" />
          </div>
          <div className="bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative flex items-end h-80 p-6">
            <div className="z-10">
              <p className="text-gray-900 mb-1">Enjoy</p>
              <p className="text-2xl font-semibold">With</p>
              <p className="text-4xl font-bold opacity-40">Speaker</p>
              <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
            </div>
            <img className="absolute -right-4 top-8 w-60" src={Image3} alt="MacBook" />
          </div>
        </div>
      </div>
    </div>
);

export default Category2;
