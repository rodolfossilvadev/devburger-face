import { useEffect, useState } from "react";
import { Container, LinkMenu, Menu } from "./styles";
import { api } from "../../../services/api"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import formatDate from "../../../utils/formatDate.js";
import status from "./onderStatus.js";



import Row from "./row.jsx";

function Orders() {
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    const [activeStatus, setActiveStatus] = useState(1)


    const [rows, setRows] = useState([])

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('/orders');

            setOrders(data);
            setFilteredOrders(data);
        }
        loadOrders();
    }, []);

    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: formatDate(order.createdAt),
            status: order.status,
            products: order.products,
        };
    }
    useEffect(() => {
        const newRows = filteredOrders.map((ord) => createData(ord))
        setRows(newRows)
    }, [filteredOrders])

    useEffect(() => {
        if (activeStatus === 1) {
            setFilteredOrders(orders)
        } else {
            const statusIdex = status.findIndex(sts => sts.id === activeStatus)
            const newFileredOrders = orders.filter(
                (order) => order.status === status[statusIdex].value
            )
            setFilteredOrders(newFileredOrders)
        }
    }, [orders])

    function handleStatus(status) {
        if (status.id === 1) {
            setFilteredOrders(orders)
        } else {
            const newOrders = orders.filter(order => order.status === status.value);
            setFilteredOrders(newOrders)
        }
        setActiveStatus(status.id)

    }

    return (
        <Container >
            <Menu>
                {status && status.map(status => (
                    <LinkMenu
                        key={status.id}
                        onClick={() => handleStatus(status)}
                        isActiveStatus={activeStatus === status.id}
                    >
                        {status.label}
                    </LinkMenu>
                ))}
            </Menu>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead style={{ background: '#000' }}>
                        <TableRow >
                            <TableCell />
                            <TableCell style={{ color: '#fff' }}>Pedido</TableCell>
                            <TableCell style={{ color: '#fff' }}>Cliente</TableCell>
                            <TableCell style={{ color: '#fff' }}>Data do pedido</TableCell>
                            <TableCell style={{ color: '#fff' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.orderId} row={row} setOrders={setOrders} orders={orders} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Orders;