import { useNavigate } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import Rating from "./Rating";
import { useEffect } from "react";

const MoreYouLike = ({ currentProduct }) => {
    const { products } = useProductStore();
    const currentCategory = currentProduct.category;
    const navigate = useNavigate();
    const similarProducts = products.filter(
        (el) => el.category === currentCategory && el.id !== currentProduct.id
    );
    useEffect(() => {

        window.scrollTo(0, 0);
    }, [currentProduct]);

    return (
        <div className="mt-8">
            <div className="flex flex-wrap gap-3 items-center justify-center">
                {similarProducts.map((item) => (
                    <div
                        onClick={() => navigate(`/product-detail/${item.id}`)}
                        key={item.id}
                        className="bg-white mb-7   cursor-pointer shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-56 w-32 object-contain mx-auto"
                        />
                        <div className="p-4 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {item?.title?.substring(0, 20)}...
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {item?.description?.substring(0, 45)}...
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-bold text-gray-800">
                                    ${item?.price}
                                </p>
                                <Rating rate={item.rating.rate} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreYouLike;
