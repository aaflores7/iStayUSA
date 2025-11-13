
import React from 'react';
import { Property } from '../types';
import { StarIcon } from './icons/StarIcon';
import { BedIcon } from './icons/BedIcon';
import { BathIcon } from './icons/BathIcon';


interface PropertyCardProps {
  property: Property;
  onSelectProperty: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelectProperty }) => {
  return (
    <div 
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => onSelectProperty(property)}
    >
      <div className="relative">
        <img className="w-full h-56 object-cover" src={property.images[0]} alt={property.title} />
        <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
            <StarIcon className="w-4 h-4 text-yellow-500 mr-1" />
            <span>{property.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{property.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{property.location}</p>
        <div className="flex items-center text-sm text-gray-700 mt-2 space-x-4">
            <span className="flex items-center"><BedIcon className="w-4 h-4 mr-1"/>{property.bedrooms} beds</span>
            <span className="flex items-center"><BathIcon className="w-4 h-4 mr-1"/>{property.bathrooms} baths</span>
        </div>
        <p className="mt-3 text-gray-900">
          <span className="font-bold text-xl">${property.pricePerNight}</span>
          <span className="text-sm"> / night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
