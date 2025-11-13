
import React from 'react';
import { Property, Destination, Testimonial } from '../types';
import { PROPERTIES, DESTINATIONS, TESTIMONIALS } from '../constants';
import PropertyCard from '../components/PropertyCard';
import { StarIcon } from '../components/icons/StarIcon';

interface HomePageProps {
    onNavigateToListings: () => void;
    onSelectProperty: (property: Property) => void;
}

// Hero Section Component
const Hero: React.FC<{ onSearch: () => void }> = ({ onSearch }) => (
    <div className="relative h-[60vh] min-h-[400px] text-white">
        <img src="https://picsum.photos/seed/hero/1800/1200" alt="Beautiful rental property" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Your Perfect Stay in the USA</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">Discover unique homes and experiences, all in one place.</p>
            <div className="w-full max-w-3xl bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-2xl">
                <form className="grid grid-cols-1 md:grid-cols-4 items-center gap-4" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
                    <input type="text" placeholder="Location" className="bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none px-4 py-2" />
                    <input type="date" placeholder="Check-in" className="bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none px-4 py-2" />
                    <input type="date" placeholder="Check-out" className="bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none px-4 py-2" />
                    <button type="submit" className="bg-red-500 text-white font-bold py-3 px-6 rounded-full hover:bg-red-600 transition duration-300 w-full">Search</button>
                </form>
            </div>
        </div>
    </div>
);

// Featured Listings Component
const FeaturedListings: React.FC<{ properties: Property[], onSelectProperty: (property: Property) => void }> = ({ properties, onSelectProperty }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Top-Rated Stays</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map(prop => (
                <PropertyCard key={prop.id} property={prop} onSelectProperty={onSelectProperty}/>
            ))}
        </div>
    </div>
);

// How It Works Component
const HowItWorks: React.FC = () => (
    <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                    <div className="bg-red-500 text-white rounded-full p-6 mb-4 text-4xl font-bold">1</div>
                    <h3 className="text-xl font-semibold mb-2">Search</h3>
                    <p className="text-gray-600">Find your perfect stay from thousands of unique properties.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-red-500 text-white rounded-full p-6 mb-4 text-4xl font-bold">2</div>
                    <h3 className="text-xl font-semibold mb-2">Book</h3>
                    <p className="text-gray-600">Securely book your stay with just a few clicks.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-red-500 text-white rounded-full p-6 mb-4 text-4xl font-bold">3</div>
                    <h3 className="text-xl font-semibold mb-2">Stay</h3>
                    <p className="text-gray-600">Enjoy your trip with the comfort and privacy of a home.</p>
                </div>
            </div>
        </div>
    </div>
);

// Explore Destinations Component
const ExploreDestinations: React.FC<{ destinations: Destination[], onExplore: () => void }> = ({ destinations, onExplore }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Explore by Destination</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map(dest => (
                <div key={dest.id} className="relative rounded-xl overflow-hidden cursor-pointer group" onClick={onExplore}>
                    <img src={dest.imageUrl} alt={dest.city} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold">{dest.city}</h3>
                        <p>{dest.state}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// Testimonials Component
const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => (
    <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What Our Guests Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map(t => (
                    <div key={t.id} className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5"/>)}
                        </div>
                        <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                        <p className="font-semibold text-gray-800">{t.author}</p>
                        <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onNavigateToListings, onSelectProperty }) => {
    return (
        <main>
            <Hero onSearch={onNavigateToListings} />
            <FeaturedListings properties={PROPERTIES} onSelectProperty={onSelectProperty}/>
            <HowItWorks />
            <ExploreDestinations destinations={DESTINATIONS} onExplore={onNavigateToListings}/>
            <Testimonials testimonials={TESTIMONIALS} />
        </main>
    );
};

export default HomePage;
