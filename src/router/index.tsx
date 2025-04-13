import { createBrowserRouter } from "react-router";
import EcommercePage from "../pages/ecommerce";
import OrdersPage from "../pages/orders";
import AppLayout from "../pages/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/ecommerce",
                element: <EcommercePage />,
            },
            {
                path: "/orders",
                element: <OrdersPage />,
            },
        ]
    },
]);
export default router;