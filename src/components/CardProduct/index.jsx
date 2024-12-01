import PropTypes from "prop-types";
import { CardImage, Container } from "./styles.js";
import { CartButton } from "../CartButton";
import { useCart } from "../../hooks/CartContext.jsx";
import { toast } from "react-toastify";
import { Heart, Star } from "@phosphor-icons/react";

export function CardProduct({ product }) {
    const { putProductInCart } = useCart();

    const handleAddToCart = () => {
        putProductInCart(product);
        toast.success(`${product.name} foi adicionado ao carrinho!`);
    };

    return (
        <Container>

            <CardImage src={product.url} alt={product.name} />

            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>

            <CartButton onClick={handleAddToCart} />
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        currencyValue: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }),
};
