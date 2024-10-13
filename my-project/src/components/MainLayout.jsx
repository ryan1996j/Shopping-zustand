import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { Container } from "./container"

const MainLayout = () => {
    return (
        <div>
            <Container>
                <Header />
                <Outlet />
                <Footer />
            </Container>

        </div>

    )
}

export default MainLayout
