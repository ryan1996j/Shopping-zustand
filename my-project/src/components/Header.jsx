import { Link } from "react-router-dom"
import useCartStore from "../store/useCartStore"
const Header = () => {
    const { carts } = useCartStore();
    return (
        <section >
            <div className="flex justify-between mb-20 top-0 items-center p-4 fixed w-full bg-gray-200 z-50 left-0 right-0">
                <Link to='/' className="uppercase font-bold tracking-wider text-xl">My Shopping</Link>
                <Link to="/Cart" className="bg-blue-600 relative px-8 py-3 rounded-lg text-white text-sm font-light">
                    <p className="absolute bg-red-600 p-1 px-2 rounded-full top-[-10px] right-[-5px]">{carts.length}</p>
                    My Cart </Link>

            </div>
        </section>
    )
}

export default Header 
