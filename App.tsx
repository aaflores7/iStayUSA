
import React, { useState, useEffect } from 'react';
import { Property } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import PropertyPage from './pages/PropertyPage';
import { PROPERTIES } from './constants';

type View = 'home' | 'listings' | 'property';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>('home');
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

    // Scroll to top on view change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentView, selectedProperty]);


    const navigateHome = () => {
        setCurrentView('home');
        setSelectedProperty(null);
    };

    const navigateToListings = () => {
        setCurrentView('listings');
        setSelectedProperty(null);
    };

    const selectProperty = (property: Property) => {
        setSelectedProperty(property);
        setCurrentView('property');
    };

    const renderContent = () => {
        switch (currentView) {
            case 'home':
                return <HomePage onNavigateToListings={navigateToListings} onSelectProperty={selectProperty}/>;
            case 'listings':
                return <ListingsPage onSelectProperty={selectProperty} />;
            case 'property':
                // A default property is provided as a fallback.
                // In a real app, you might show a "not found" page or redirect.
                return <PropertyPage property={selectedProperty || PROPERTIES[0]} />;
            default:
                return <HomePage onNavigateToListings={navigateToListings} onSelectProperty={selectProperty}/>;
        }
    };

    return (
        <div className="bg-white text-gray-800 font-sans">
            <Header onNavigateHome={navigateHome} onNavigateToListings={navigateToListings} />
            {renderContent()}
            <Footer />
        </div>
    );
};

export default App;
