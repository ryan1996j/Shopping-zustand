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

                className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 "
            >
                <div className=" w-full flex items-center justify-between border-b-2 border-black pb-3">
                    <div>
                        <img
                            src={cart.product.image}
                            alt={cart.product.title}
                            className="w-36 h-42 object-cover rounded-lg"
                        />
                    </div>

                    <div className="w-96 text-wrap ">
                        <p className="text-lg font-semibold">{cart.product.title}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex justify-between items-center w-32 justify-center ">
                        <button
                            className="text-xl font-bold px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                            onClick={() => handleDecrease(cart.id, cart.quantity - 1)}
                        >
                            -
                        </button>
                        <span >{cart.quantity}</span>
                        <button
                            className="text-xl font-bold px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                            onClick={() => handleIncrease(cart.id, cart.quantity + 1)}
                        >
                            +
                        </button>
                    </div>

                    {/* Price */}
                    <div>
                        <p className="text-lg font-semibold  w-32  text-end">
                            ${(cart.product.price * cart.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart
