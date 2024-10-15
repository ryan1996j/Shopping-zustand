import useCartStore from "../store/useCartStore"

const Cart = ({ cart }) => {
    const { updateQuantity, deletCart } = useCartStore();

    const handleIncrease = (id, quantity) => {
        updateQuantity(id, quantity)
    }
    const handleDecrease = (id, quantity) => {
        quantity > 0 ? updateQuantity(id, quantity) : deletCart(id)

    }

    return (
        <div>

            <div

                className="flex items-center justify-between  bg-white shadow-md rounded-lg p-4 "
            >
                <div className=" w-full flex items-center justify-between border-b-2 border-black pb-3">
                    <div className="w-1/5">
                        <img
                            src={cart.product.image}
                            alt={cart.product.title}
                            className="lg:w-36 lg:h-42 object-cover rounded-lg"
                        />
                    </div>

                    <div className="lg:w-96 text-wrap w-1/3  ">
                        <p className="lg:text-lg lg:font-semibold text-sm">{cart.product.title}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="inline-block flex flex-col lg:flex-row lg:justify-between  w-1/6 lg:w-32 justify-center items-center">
                        <button
                            className="text-xl font-bold lg:px-3 w-8 lg:py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                            onClick={() => handleDecrease(cart.id, cart.quantity - 1)}
                        >
                            -
                        </button>
                        <span>{cart.quantity}</span>
                        <button
                            className="text-xl font-bold lg:px-3 lg: py-1 w-7 bg-gray-200 rounded-lg hover:bg-gray-300"
                            onClick={() => handleIncrease(cart.id, cart.quantity + 1)}
                        >
                            +
                        </button>
                    </div>



                    {/* Price */}
                    <div className=" w-1/5">
                        <p className="text-lg font-semibold    text-end">
                            ${(cart.product.price * cart.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart
