import BreadCrumb from "../components/BreadCrumb";
import CartSection from "../components/CartSection";
import EmptyCart from "../components/EmptyCart";
import useCartStore from "../store/useCartStore"

const MyCart = () => {
    const { carts } = useCartStore();





    return (
        <div className="mt-20">
            <BreadCrumb currentPageTitle="My-Cart" />
            {carts.length > 0 ? <CartSection /> : <EmptyCart />}




        </div>
    )
}

export default MyCart
