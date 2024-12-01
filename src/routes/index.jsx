import { createBrowserRouter } from "react-router-dom";

import { Header, Footer } from "../components";

import { Cart, Home, Register, Login, Menu, Checkout, CompletePayment, Admin } from "../containers";
import paths from "../Constants/paths";

export const router = createBrowserRouter([

    {
        path: '/',
        element:
            (
                <>
                    <Header />
                    < Home />
                    <Footer />
                </>
            ),

    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                < Menu />
                <Footer />
            </>
        ),

    },
    {
        path: '/carrinho',
        element:
            <>
                <Header />
                <Cart />
                <Footer />
            </>

    },
    {
        path: '/checkout',
        element: <>
            <Header />
            <Checkout />
            <Footer />
        </>
    },
    {
        path: '/complete',
        element: <>
            <Header />
            <CompletePayment />
            <Footer />
        </>
    },
    {
        path: paths.Orders,
        element: <>
            <Admin />
            <Footer />
        </>
    },
    {
        path: paths.Products,
        element: <>
            <Admin />
            <Footer />
        </>
    },
    {
        path: paths.EditProducts,
        element: <>
            <Admin />
            <Footer />
        </>
    },
    {
        path: paths.NewProduct,
        element: <>
            <Admin />
            <Footer />
        </>
    },
]);
