import { Table } from '../index.js';
import { useCart } from '../../hooks/CartContext.jsx';
import { formatPrice } from '../../utils/formatPrice.js';
import { ButtonGroup, EmptyCart, LinkMenu, ProductImage, TotalPrice, TrashImage } from './styes.js';
import TrashIcon from '../../assets/trash.svg';
import { useResolvedPath } from "react-router-dom";


export function CartItems() {
    const { cartProducts, incriseProduct, decreseProduct, deleteProduct } = useCart();
    const { pathname } = useResolvedPath();


    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map(product => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage src={product.url} />
                            </Table.Td>
                            <Table.Td>
                                {product.name}
                            </Table.Td>
                            <Table.Td>
                                {product.currencyValue}
                            </Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => decreseProduct(product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={() => incriseProduct(product.id)}>+</button>
                                </ButtonGroup>
                            </Table.Td>
                            <Table.Td>
                                <TotalPrice>
                                    {formatPrice(product.quantity * product.price)}
                                </TotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashImage src={TrashIcon} alt="lixeira" onClick={() => deleteProduct(product.id)} />
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : <EmptyCart>carrinho vazio</EmptyCart>}
            </Table.Body>
            <LinkMenu to={'/cardapio'} isActive={pathname === '/cardapio'} >
                Adicionar mais produtos
            </LinkMenu>
        </Table.Root>
    );
}