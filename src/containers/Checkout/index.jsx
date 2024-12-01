import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import stripePromise from "../../config/stripeConfig.js"
import CheckoutForm from "../../components/Stripe/CheckoutForm";
import { Container } from "./styles.js";

export function Checkout() {
    const {
        state: { clientSecret }
    } = useLocation();

    if (!clientSecret) {
        return (<di>Erro, volte e tente novamente!</di>)
    }

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <Container>
                <h2>Checkout - Finalizar pedido</h2>
                <CheckoutForm />
            </Container>
        </Elements>
    )
}

