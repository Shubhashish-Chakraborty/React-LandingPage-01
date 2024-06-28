import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
                <div className="flex justify-center space-x-8 mb-4">
                    <a href="https://twitter.com/__Shubhashish__" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://instagram.com/___shubhashish___" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://linkedin.com/in/Shubhashish-Chakraborty" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/Shubhashish-Chakraborty" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Shubhashish Chakraborty. All rights reserved.</p>
            </div>
        </footer>
    );
};
