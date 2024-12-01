import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { Container, ItemContainer, LinkMenu } from "./styles";
import listLinks from "./menuList";
import { useUser } from "../../hooks/UserContext";
import Logo from "../../assets/logo.svg"
export function SideMennuAdmin({ pathname }) {
    const { logout } = useUser()

    return (

        <Container>
            <img src={Logo} alt="logo-devburger" />
            {listLinks.map(item =>
                <ItemContainer key={item.id} isActive={pathname === item.link}>
                    <item.icon className="icon" />
                    <LinkMenu to={item.link} isActive={pathname === item.link} >{item.label}</LinkMenu>
                </ItemContainer>
            )}

            <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
                <LogoutIcon style={{ color: '#ff3205' }} />
                <LinkMenu to={"/login"} onClick={logout} >Sair</LinkMenu>
            </ItemContainer>
        </Container>

    );
};