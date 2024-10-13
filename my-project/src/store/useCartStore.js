import { create } from "zustand";

const useCartStore = create((set) => (
    {
        carts: [
            // {
            //     id: 1,
            //     productId: 1,
            //     quantity: 1,
            //     product: {}
            // },
            // {
            //     id: 2,
            //     productId: 1,
            //     quantity: 4,
            //     product: {}
            // }
        ],
        addToCart: (newCart) => set((state) => ({ carts: [...state.carts, newCart] })),
        removeCart: () => set(() => ({ carts: [] })),
        updateQuantity: (id, newQuantity) => set((state) => (
            {
                carts: state.carts.map((cartItem) => cartItem.id === id
                    ? { ...cartItem, quantity: newQuantity }
                    : cartItem)
            }
        )
        ),
        deletCart: (id) => set((state) => (
            { carts: state.carts.filter((cartItem) => cartItem.id !== id) }

        ))
    }

))
export default useCartStore