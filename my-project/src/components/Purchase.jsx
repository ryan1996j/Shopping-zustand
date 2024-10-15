import { useNavigate } from 'react-router-dom'
import orderConfirm from '../assets/orderConfirm.png'
import { useEffect } from 'react';
import BreadCrumb from './BreadCrumb';
const Purchase = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    const currentDate = new Date();
    const orderReceiveDate = new Date();
    orderReceiveDate.setDate(currentDate.getDate() + 7);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = orderReceiveDate.toLocaleDateString('en-US', options);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mt-20 ">

            <div className="lg:w-1/3 w-full bg-white shadow-xl rounded-xl py-5 mx-auto flex flex-col justify-center items-center p-5">
                <div className="w-[70%] mx-auto  ">
                    <h1 className="text-lg font-semi-bold mb-3 ">Your order is confirmed</h1>
                    <p className="text-sm  text-gray-800 mb-1">
                        Thank you for shopping with us
                    </p>
                    <p className="text-sm  text-gray-800 mb-1">
                        Your order will reach you on
                        <br></br>
                        <span className='font-bold '>{` ${formattedDate}`}</span>

                    </p>
                </div>
                <div>
                    <img src={orderConfirm} className='lg:h-[360px] lg-[380px]' />
                </div>
                <button onClick={handleClick} className='bg-blue-600 text-white rounded-lg px-6 py-2 text-sm font-medium hover:bg-blue-700 transition ease-in-out duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
                    Home
                </button>
            </div>
        </div >
    )
}

export default Purchase
