import { useParams } from "react-router-dom"
import useProductStore from "../store/useProductStore";
import { useEffect } from "react";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import MoreYouLike from "../components/MoreYouLike";
import useCartStore from "../store/useCartStore";

const ProductDetail = () => {
    const { productId } = useParams();
    const { products } = useProductStore();
    const currentProduct = products.find((product) => (

        console.log(productId),
        product.id == productId

    ))
    const { carts, addToCart } = useCartStore();
    const addedCard = carts.find((el) => el.productId === currentProduct.id)
    const addToCartHandler = (e) => {
        e.stopPropagation();

        const newItem = {
            id: Date.now(),
            productId: currentProduct.id,
            quantity: 1,
            product: currentProduct
        }
        addToCart(newItem)

    }

    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="mt-20">
            <BreadCrumb currentPageTitle="Product-Detail " />
            {/* <h1 className="text-3xl font-medium text-center my-11">The Detail of the Product</h1> */}
            <div className="max-w-6xl mx-auto py-10 px-4">
                <div className="flex-col justify-around items-center  lg:flex">
                    {/* Left Column: Product Details */}
                    <div className="space-y-4 w-full lg:w-[50%]   ">
                        <div className="w-[90%] mx-auto py-3 px-6 cursor-pointer shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                            {/* Product Image */}
                            <div className="rounded-lg mb-3 overflow-hidden">
                                <img
                                    src={currentProduct.image}
                                    alt={currentProduct.title}
                                    className="w-56 h-auto object-contain mx-auto"
                                />
                            </div>

                            {/* Category */}
                            <div className="text-sm text-gray-500 mb-3 uppercase">
                                Category: {currentProduct.category}
                            </div>

                            {/* Price */}
                            <div className="text-2xl font-semibold mb-3 text-gray-800">
                                ${currentProduct.price.toFixed(2)}
                            </div>
                            <div className="mb-3">
                                <Rating rate={currentProduct.rating.rate} />
                            </div>

                            {/* Product Info */}
                            <div className="text-base mb-3 text-gray-600">
                                {currentProduct.description}
                            </div>
                            {/*add to cart*/}
                            <div className="text-center my-2">
                                {addedCard ? <button className="bg-black text-white rounded-lg px-6 py-2 text-sm font-medium  ">
                                    ADDED
                                </button>

                                    : <button onClick={addToCartHandler} className="bg-blue-600 text-white rounded-lg px-6 py-2 text-sm font-medium hover:bg-blue-700 transition ease-in-out duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                                        ADD TO CART
                                    </button>}

                            </div>
                        </div>
                    </div>

                    {/* Right Column: More You Like Section */}
                    <div className="w-full lg:w-full  mt-16" >
                        <h2 className="text-2xl text-center  uppercase">You may also like</h2>
                        {/* You can extend this area with products sim<ilar to the current one */}
                        <div className=" rounded-lg flex items-center flex-wrap justify-center  text-gray-500">
                            <MoreYouLike currentProduct={currentProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
