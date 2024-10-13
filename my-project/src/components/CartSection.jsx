
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import Cart from "./Cart";
import { useEffect } from "react";

const CartSection = () => {
    const { carts, removeCart } = useCartStore();
    const navigate = useNavigate();

    const taxRate = 0.10;


    const totalPrice = carts.reduce((total, cartItem) => {
        return total + cartItem.product.price * cartItem.quantity;
    }, 0);

    const totalTax = totalPrice * taxRate;
    const handlePurchase = () => {
        removeCart()
        navigate('/purchase')

    }
    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center pt-6">Shopping Cart</h2>
            {
                carts.map((cart) => <Cart key={cart.id} cart={cart} />)
            }
            <div className="border-t-2 border-gray-300 pt-4 mt-4 text-right">
                <p className="text-lg font-semibold">
                    Subtotal: <span>${totalPrice.toFixed(2)}</span>
                </p>
                <p className="text-lg font-semibold">
                    Tax (10%): <span>${totalTax.toFixed(2)}</span>
                </p>
                <p className="text-xl font-bold mt-2">
                    Total: <span>${(totalPrice + totalTax).toFixed(2)}</span>
                </p>
            </div>
            <button onClick={handlePurchase} className="border-2 border-black  mx-auto my-11 block   px-12 py-2 text-lg font-medium hover:bg-black hover:text-white transition duration-200 ease-in-out">
                ORDER
            </button>
        </div>
    )
}

export default CartSection
