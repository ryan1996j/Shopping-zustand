import { useNavigate } from "react-router-dom"
import useCartStore from "../store/useCartStore";
import Rating from "./Rating";

const Card = ({ product }) => {
    const navigate = useNavigate();

    const { carts, addToCart } = useCartStore();
    const addedCard = carts.find((el) => el.productId === product.id)



    const addToCartHandler = (e) => {
        e.stopPropagation();

        const newItem = {
            id: Date.now(),
            productId: product.id,
            quantity: 1,
            product: product
        }
        addToCart(newItem)

    }





    return (
        <div className=" flex justify-center my-6 py-2 ">


            <div onClick={() => navigate(`/product-detail/${product.id}`)} className="bg-white w-72 border-2 p-1 rounded-lg cursor-pointer hover:shadow-xl  flex flex-col">
                <img src={product.image} className="mx-auto h-[228px]" />
                <div className="mt-3  w-full flex-grow flex flex-col justify-between p-2">
                    <div>
                        <p className="mb-3 text-lg font-semibold tracking-wider">{product?.title?.substring(0, 20)}...</p>
                        <p className=" mb-3 text-sm text-gray-600">{product?.description?.substring(0, 45)}...</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-lg font-bold text-gray-800">${product?.price}</p>
                        <Rating rate={product.rating.rate} />
                    </div>
                </div>
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
    )
}

export default Card
