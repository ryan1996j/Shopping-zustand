import { useParams } from "react-router-dom"
import useProductStore from "../store/useProductStore";
import { useEffect } from "react";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";

const ProductDetail = () => {
    const { productId } = useParams();
    const { products } = useProductStore();
    const currentProduct = products.find((product) => (

        console.log(productId),
        product.id == productId

    ))
    console.log(currentProduct)
    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="mt-20">
            <BreadCrumb currentPageTitle="Product-Detail " />
            {/* <h1 className="text-3xl font-medium text-center my-11">The Detail of the Product</h1> */}
            <div className="max-w-6xl mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Product Details */}
                    <div className="space-y-4">
                        {/* Product Image */}
                        <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={currentProduct.image}
                                alt={currentProduct.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Category */}
                        <div className="text-sm text-gray-500 uppercase">
                            Category: {currentProduct.category}
                        </div>

                        {/* Price */}
                        <div className="text-2xl font-semibold text-gray-800">
                            ${currentProduct.price.toFixed(2)}
                        </div>
                        <div>
                            <Rating rate={currentProduct.rating.rate} />
                        </div>

                        {/* Product Info */}
                        <div className="text-base text-gray-600">
                            {currentProduct.description}
                        </div>
                    </div>

                    {/* Right Column: More You Like Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl text-center  uppercase">You may also like</h2>
                        {/* You can extend this area with products similar to the current one */}
                        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-500">
                            {/* Placeholder for additional items */}
                            Placeholder for more product suggestions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
