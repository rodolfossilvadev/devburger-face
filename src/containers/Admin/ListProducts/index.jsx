import { useEffect, useState } from "react";
import { Container, Editar, ImgProduct, DeleteImage } from "./styles.js";
import { api } from "../../../services/api.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatPrice } from "../../../utils/formatPrice.js";
import { CheckBox } from "@mui/icons-material";
import { DisabledByDefault } from "@mui/icons-material";
import paths from "../../../Constants/paths.js";
import { useNavigate } from "react-router-dom";
import TrashIcon from '../../../assets/trash.svg';
import { toast } from "react-toastify"; // Importando o toast

function ListProducts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            setProducts(data);
        }
        loadProducts();
    }, []);

    async function deleteProduct(productId) {
        const confirmDelete = window.confirm("Tem certeza que deseja deletar este produto?");
        if (!confirmDelete) return;

        try {
            await api.delete(`/products/${productId}`);
            setProducts(products.filter(product => product.id !== productId));
            toast.success('Produto deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            toast.error('Erro ao deletar produto.');
        }
    }

    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckBox style={{ color: 'green' }} />
        }
        return <DisabledByDefault style={{ color: '#ff3205' }} />
    }

    function editProduct(product) {
        navigate(paths.EditProducts, { state: { product } });
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ background: '#000' }}>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Nome</TableCell>
                            <TableCell style={{ color: '#fff' }}>Preço</TableCell>
                            <TableCell style={{ color: '#fff' }}>Em oferta</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                            <TableCell style={{ color: '#fff' }}>Editar</TableCell>
                            <TableCell style={{ color: '#fff' }}>Deletar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products &&
                            products.map((product) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{formatPrice(product.price)}</TableCell>
                                    <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                    <TableCell>
                                        <ImgProduct src={product.url} alt="imagem-produto" />
                                    </TableCell>
                                    <TableCell>
                                        <Editar onClick={() => editProduct(product)} />
                                    </TableCell>
                                    <TableCell>
                                        <DeleteImage
                                            src={TrashIcon}
                                            alt="lixeira"
                                            onClick={() => deleteProduct(product.id)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default ListProducts;
