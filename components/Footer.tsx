
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Help Center</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Safety Information</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Cancellation Options</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Community</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-red-500">iStayUSA.org: disaster relief</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Support Afghan refugees</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Combating discrimination</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Hosting</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Try hosting</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Explore hosting resources</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Visit our community forum</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
                         <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Newsroom</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-red-500">Investors</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} iStayUSA, Inc. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#">Privacy</a>
                        <span>&middot;</span>
                        <a href="#">Terms</a>
                        <span>&middot;</span>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
