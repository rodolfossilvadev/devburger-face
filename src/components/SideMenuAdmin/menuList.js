import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import paths from '../../Constants/paths';
import { AddShoppingCart, Inventory } from '@mui/icons-material';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Orders,
        icon: WorkOutlineIcon,
    },
    {
        id: 2,
        label: 'Produtos',
        link: paths.Products,
        icon: Inventory,
    },
    {
        id: 3,
        label: 'Adicionar produto',
        link: paths.NewProduct,
        icon: AddShoppingCart,
    }

]

export default listLinks
