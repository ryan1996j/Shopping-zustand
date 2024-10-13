import freeCart from '/vs project/SWD NEXT REACT/shopping/my-project/public/freeCart.jpg'
const EmptyCart = () => {
    return (
        <div>
            <p className='text-2xl font-bold mb-6 text-center pt-6'>Empty Cart</p>

            <img src={freeCart} className='w-[500px] h-[500px] mx-auto' />
        </div>
    )
}

export default EmptyCart
