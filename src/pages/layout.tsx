import { Outlet } from "react-router"
import '../assets/css/layout.css'
import SideBar from "../components/sidebar"
import Header from "../components/header"
const AppLayout = () => {
    return (
        <main className="layout">
            <SideBar />
            <div className="content">
                <Header />
                <Outlet />
            </div>
        </main>
    )
}
export default AppLayout