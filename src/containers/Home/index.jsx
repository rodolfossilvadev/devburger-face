import { CategoriesCarousel, OffersCarousel } from "../../components";

import { Banner, Container } from "./style";


export function Home() {

    return (
        <main>
            <Banner>
                <h1>Bem-Vindo</h1>
            </Banner>
            <Container>
                <div>
                    <CategoriesCarousel />
                    <OffersCarousel />
                </div>
            </Container>
        </main>
    );
};