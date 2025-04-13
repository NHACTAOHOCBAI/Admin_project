import { FiMenu } from "react-icons/fi"
import { IoMdNotificationsOutline } from "react-icons/io"
import '../assets/css/header.css'
import { IoCartOutline, IoChatboxOutline } from "react-icons/io5"
import { useLayout } from "../context/layoutContext"
const Header = () => {
    const userInfo = {
        name: "Michael",
        avatar: ''
    }
    const iconSize = 20;
    const { setIsSideBarActive } = useLayout();
    return (
        <header className="app-header">
            <div className="menu-toggle" onClick={() => { setIsSideBarActive((pre) => !pre) }}>
                <FiMenu size={iconSize} className="icon" />
            </div>
            <div className="user-panel">
                <div className="shopping-cart">
                    <IoCartOutline size={iconSize} className="icon" />
                </div>
                <div className="chatting">
                    <IoChatboxOutline size={iconSize} className="icon" />
                </div>
                <div className="notification">
                    <IoMdNotificationsOutline size={iconSize} className="icon" />
                </div>
                <div className="user">
                    <div className="avatar">
                        <img src={userInfo.avatar} alt="" />
                    </div>
                    <p className="welcome">
                        Hi, <span className="name"> {userInfo.name}</span>
                    </p>
                </div>
            </div>
        </header>
    )
}
export default Header