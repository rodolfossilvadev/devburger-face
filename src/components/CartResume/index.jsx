import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../hooks/CartContext.jsx"
import { api } from "../../services/api.js"
import { formatPrice } from "../../utils/formatPrice.js"
import { Button } from "../Button";
import { Container } from "./styles.js"


export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(5);
    const navigate = useNavigate();

    const { cartProducts, clearCart } = useCart();

    useEffect(() => {
        const sumAlItems = cartProducts.reduce((acc, current) => {

            return current.price * current.quantity + acc;
        }, 0)

        setFinalPrice(sumAlItems);
    }, [cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price
            }
        });

        try {
            const { data } = await api.post('/create-payment-intent', { products })

            navigate('/checkout', {
                state: data,
            });
        } catch (err) {
            toast.error('Erro, Tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    };

    return (
        <div>
            <Container>

                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="tax">Taxa de Entrega</p>
                    <p className="tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">

                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>

                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar pedido</Button>
        </div>

    );
}