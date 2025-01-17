import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '../constants';

const ListingSection = () => {
  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Explore Our Property Listings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Property Image */}
            <img
              src={property.image} 
              alt={property.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              {/* Property Name */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 truncate">
                {property.name}
              </h2>

              {/* Property Location */}
              <p className="text-gray-600 text-sm mb-4">
                {property.address.city}, {property.address.country}
              </p>

              {/* Property Price */}
              <p className="text-green-600 font-bold text-lg mb-2">
                ${property.price} / night
              </p>

              {/* Property Rating */}
              <p className="text-yellow-500 text-sm mb-4">
                Rating: {property.rating} ⭐
              </p>

              {/* View Details Button */}
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListingSection;

