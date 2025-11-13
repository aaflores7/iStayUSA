
import React from 'react';

interface HeaderProps {
    onNavigateHome: () => void;
    onNavigateToListings: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, onNavigateToListings }) => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div 
                        className="text-2xl font-bold text-red-500 cursor-pointer"
                        onClick={onNavigateHome}
                    >
                        iStayUSA
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <button onClick={onNavigateHome} className="text-gray-600 hover:text-red-500 transition-colors">Home</button>
                        <button onClick={onNavigateToListings} className="text-gray-600 hover:text-red-500 transition-colors">Listings</button>
                        <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">About Us</a>
                        <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Contact</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <button className="hidden sm:block text-gray-600 hover:text-red-500 transition-colors">Log In</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors shadow-md">Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
