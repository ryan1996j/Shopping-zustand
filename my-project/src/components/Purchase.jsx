import { useNavigate } from 'react-router-dom'
import orderConfirm from '../assets/orderConfirm.png'
import { useEffect } from 'react';
import BreadCrumb from './BreadCrumb';
const Purchase = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mt-20 ">

            <div className="w-1/3 bg-white shadow-xl rounded-xl py-5 mx-auto flex flex-col justify-center items-center p-5">
                <div className="w-[70%] mx-auto  ">
                    <h1 className="text-lg font-semi-bold mb-3 ">Your order is confirmed</h1>
                    <p className="text-sm  text-gray-800 mb-1">
                        Thank you for shopping with us
                    </p>
                    <p className="text-sm  text-gray-800">
                        Your order will reach you on 14.feb.2025
                    </p>
                </div>
                <div>
                    <img src={orderConfirm} className='h-[360px]' />
                </div>
                <button onClick={handleClick} className='bg-blue-600 text-white rounded-lg px-6 py-2 text-sm font-medium hover:bg-blue-700 transition ease-in-out duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
                    Home
                </button>
            </div>
        </div>
    )
}

export default Purchase
