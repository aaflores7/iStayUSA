
import React, { useState, useMemo } from 'react';
import { Property } from '../types';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { ChevronDownIcon } from '../components/icons/ChevronDownIcon';


// Filters Component
const Filters: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 sticky top-24 z-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div>
                <label className="text-sm font-medium text-gray-700">Price Range</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option>Any</option>
                    <option>$0 - $200</option>
                    <option>$200 - $400</option>
                    <option>$400+</option>
                </select>
            </div>
             <div>
                <label className="text-sm font-medium text-gray-700">Guests</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option>Any</option>
                    <option>1-2</option>
                    <option>3-4</option>
                    <option>5+</option>
                </select>
            </div>
            <div>
                <label className="text-sm font-medium text-gray-700">Property Type</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option>Any</option>
                    <option>Entire home</option>
                    <option>Private room</option>
                    <option>Apartment</option>
                </select>
            </div>
            <div>
                <label className="text-sm font-medium text-gray-700">Amenities</label>
                 <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option>Any</option>
                    <option>Wifi</option>
                    <option>Pool</option>
                    <option>Kitchen</option>
                </select>
            </div>
            <div className="flex items-end">
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 w-full">Apply</button>
            </div>
        </div>
    </div>
);

// Map Placeholder Component
const MapPlaceholder: React.FC = () => (
     <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center sticky top-24">
        <img src="https://i.imgur.com/gK6JpWa.png" alt="Map of listings" className="w-full h-full object-cover rounded-lg" />
    </div>
);

interface ListingsPageProps {
    onSelectProperty: (property: Property) => void;
}

const ListingsPage: React.FC<ListingsPageProps> = ({ onSelectProperty }) => {
    const [properties] = useState<Property[]>(PROPERTIES);
    const [sortBy, setSortBy] = useState('Top Rated');

    const sortedProperties = useMemo(() => {
        let sorted = [...properties];
        if (sortBy === 'Price: Low to High') {
            sorted.sort((a, b) => a.pricePerNight - b.pricePerNight);
        } else if (sortBy === 'Price: High to Low') {
            sorted.sort((a, b) => b.pricePerNight - a.pricePerNight);
        } else { // Top Rated
            sorted.sort((a, b) => b.rating - a.rating);
        }
        return sorted;
    }, [properties, sortBy]);

    return (
        <main className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Filters and Listings */}
                    <div className="lg:col-span-2">
                        <Filters onFilterChange={() => {}}/>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">{sortedProperties.length} stays found</h2>
                            <div className="relative">
                                <select 
                                    value={sortBy} 
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500">
                                    <option>Top Rated</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {sortedProperties.map(prop => (
                                <PropertyCard key={prop.id} property={prop} onSelectProperty={onSelectProperty} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Map */}
                    <div className="hidden lg:block">
                        <MapPlaceholder />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ListingsPage;
