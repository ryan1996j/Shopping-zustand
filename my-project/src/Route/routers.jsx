import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../components/MainLayout";
import ProductDetail from "../Pages/ProductDetail";
import ErrorPages from "../Pages/ErrorPages";
import MyCart from "../Pages/MyCart";
import Purchase from "../components/Purchase";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPages />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'cart',
                element: <MyCart />
            },
            {
                path: 'product-detail/:productId',
                element: <ProductDetail />
            },
            {
                path: 'purchase',
                element: <Purchase />
            }

        ]
    }

])
export default router