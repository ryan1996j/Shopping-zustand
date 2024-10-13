import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle }) => {
    return (
        <nav aria-label="breadcrumb" className="flex items-center space-x-2 text-gray-600 text-sm">
            <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{currentPageTitle}</span>
        </nav>
    );
};

export default BreadCrumb;
