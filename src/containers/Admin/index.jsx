import { Container, ContainerItems } from "./styles";
import Orders from "./Orders";
import { SideMennuAdmin } from "../../components";
import ListProducts from "./ListProducts";
import { useLocation, useNavigate } from "react-router-dom";
import paths from "../../Constants/paths";
import { useUser } from "../../hooks/UserContext";
import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";


export function Admin() {
    const { pathname } = useLocation();

    const {
        userInfo: { admin },
    } = useUser();

    const navigate = useNavigate();

    if (!admin) {
        navigate('/');

    } return (
        <Container>
            <SideMennuAdmin pathname={pathname} />
            <ContainerItems>
                {pathname === paths.Orders && <Orders />}
                {pathname === paths.Products && <ListProducts />}
                {pathname === paths.NewProduct && <NewProduct />}
                {pathname === paths.EditProducts && <EditProduct />}
            </ContainerItems>
        </Container>)
}

