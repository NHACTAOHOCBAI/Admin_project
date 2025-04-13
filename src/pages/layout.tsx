import { Outlet } from "react-router"
import '../assets/css/layout.css'
import SideBar from "../components/sidebar"
import Header from "../components/header"
import { useLayout } from "../context/layoutContext"
const AppLayout = () => {
    const { isSideBarActive } = useLayout();
    return (
        <main className="layout">
            {
                isSideBarActive && <SideBar />
            }
            <div className="content">
                <Header />
                <Outlet />
            </div>
        </main>
    )
}
export default AppLayout