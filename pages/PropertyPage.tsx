
import React from 'react';
import { Property, Review } from '../types';
import { REVIEWS } from '../constants';
import { StarIcon } from '../components/icons/StarIcon';
import { BedIcon } from '../components/icons/BedIcon';
import { BathIcon } from '../components/icons/BathIcon';

// Image Gallery Component
const ImageGallery: React.FC<{ images: string[], title: string }> = ({ images, title }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
        <div className="col-span-2 row-span-2">
            <img src={images[0]} alt={title} className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity" />
        </div>
        {images.slice(1, 5).map((img, index) => (
             <div key={index} className="overflow-hidden">
                <img src={img} alt={`${title} ${index + 2}`} className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity" />
            </div>
        ))}
    </div>
);

// Booking Form Component
const BookingForm: React.FC<{ property: Property }> = ({ property }) => (
    <div className="sticky top-24">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <p className="text-2xl font-bold text-gray-800 mb-4">
                ${property.pricePerNight} <span className="text-base font-normal text-gray-600">/ night</span>
            </p>
            <div className="grid grid-cols-2 gap-4 border border-gray-300 rounded-lg p-3 mb-4">
                <div>
                    <label className="block text-xs font-bold uppercase text-gray-500">Check-in</label>
                    <input type="date" className="w-full border-none p-0 focus:ring-0 text-sm" />
                </div>
                <div className="border-l border-gray-300 pl-4">
                    <label className="block text-xs font-bold uppercase text-gray-500">Check-out</label>
                    <input type="date" className="w-full border-none p-0 focus:ring-0 text-sm" />
                </div>
            </div>
             <div className="border border-gray-300 rounded-lg p-3 mb-4">
                 <label className="block text-xs font-bold uppercase text-gray-500">Guests</label>
                 <select className="w-full border-none p-0 focus:ring-0 text-sm">
                    {[...Array(property.guests)].map((_, i) => <option key={i}>{i+1} guest{i > 0 ? 's' : ''}</option>)}
                 </select>
             </div>
            <button className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 text-lg shadow-md">
                Reserve
            </button>
            <div className="text-center text-sm text-gray-500 mt-4">
                You won't be charged yet
            </div>
            <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-600">${property.pricePerNight} x 5 nights</span>
                    <span className="text-gray-800">$ {property.pricePerNight * 5}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-gray-600">Cleaning fee</span>
                    <span className="text-gray-800">$ 50</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-gray-600">Service fee</span>
                    <span className="text-gray-800">$ 75</span>
                </div>
            </div>
             <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$ {property.pricePerNight * 5 + 50 + 75}</span>
            </div>
        </div>
    </div>
);

// Reviews Section Component
const ReviewsSection: React.FC<{ reviews: Review[], rating: number, reviewsCount: number }> = ({ reviews, rating, reviewsCount }) => (
    <div className="py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
             <StarIcon className="w-6 h-6 text-yellow-500 mr-2" />
            {rating.toFixed(1)} &middot; {reviewsCount} reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {reviews.map(review => (
                <div key={review.id}>
                    <div className="flex items-center mb-2">
                        <img src={review.avatarUrl} alt={review.author} className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <p className="font-semibold text-gray-900">{review.author}</p>
                            <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </div>
            ))}
        </div>
    </div>
);


interface PropertyPageProps {
    property: Property;
}

const PropertyPage: React.FC<PropertyPageProps> = ({ property }) => {
    return (
        <main className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                        <StarIcon className="w-4 h-4 text-yellow-500 mr-1" />
                        <span>{property.rating} ({property.reviewsCount} reviews)</span>
                        <span className="mx-2">&middot;</span>
                        <span>{property.location}</span>
                    </div>
                </div>

                {/* Image Gallery */}
                <ImageGallery images={property.images} title={property.title} />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mt-8">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2">
                        <div className="pb-8 border-b border-gray-200">
                             <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800">{property.type} in {property.location.split(',')[0]}</h2>
                                    <p className="text-gray-600">{property.guests} guests &middot; {property.bedrooms} bedroom{property.bedrooms > 1 ? 's': ''} &middot; {property.bathrooms} bath{property.bathrooms > 1 ? 's': ''}</p>
                                </div>
                                <img src={property.host.avatarUrl} alt={property.host.name} className="w-16 h-16 rounded-full"/>
                            </div>
                        </div>
                        <div className="py-8 border-b border-gray-200">
                           <p className="text-gray-700 leading-relaxed">{property.description}</p>
                        </div>
                        <div className="py-8 border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">What this place offers</h3>
                             <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
                                {property.amenities.map(amenity => <li key={amenity} className="flex items-center">{amenity}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Booking */}
                    <div className="lg:col-span-1">
                        <BookingForm property={property} />
                    </div>
                </div>
                 {/* Reviews Section */}
                <ReviewsSection reviews={REVIEWS} rating={property.rating} reviewsCount={property.reviewsCount}/>
            </div>
        </main>
    );
};

export default PropertyPage;
