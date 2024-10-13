
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" py-10 mt-20">
            <div className="container mx-auto px-6 border-t border-gray-600 pt-5">
                <div className="flex flex-wrap justify-between">
                    {/* Company Info */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h5 className="text-xl font-semibold mb-4">Company</h5>
                        <p className="mb-2">123 E-commerce St, Suite 100</p>
                        <p className="mb-2">E-commerce City, EC 12345</p>
                        <p className="mb-2">Email: support@ecommerce.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>

                    {/* Customer Service */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h5 className="text-xl font-semibold mb-4">Customer Service</h5>
                        <ul className="space-y-2">
                            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
                            <li><a href="/returns" className="hover:text-blue-400">Returns</a></li>
                            <li><a href="/shipping" className="hover:text-blue-400">Shipping Info</a></li>
                            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="h-6 w-6 hover:text-blue-400" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="h-6 w-6 hover:text-blue-400" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="h-6 w-6 hover:text-blue-400" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="h-6 w-6 hover:text-blue-400" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-600 mt-6 pt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} E-commerce. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
