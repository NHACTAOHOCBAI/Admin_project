import logo from '../assets/img/logo.svg';
import '../assets/css/sidebar.css'
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaBoxOpen } from 'react-icons/fa';
import { NavLink } from 'react-router';
const SideBar = () => {
    const iconSize = 20;
    const linkData = [
        {
            categoryName: 'Dashboard',
            subItems: [
                {
                    name: "Ecommerce",
                    icon: <MdOutlineShoppingBag size={iconSize} />,
                    url: '/ecommerce',
                }
            ]
        },
        {
            categoryName: 'Pages',
            subItems: [
                {
                    name: "Orders",
                    icon: <FaBoxOpen size={iconSize} />,
                    url: '/orders',
                }
            ]
        }
    ]
    return (
        <div className="sidebar">
            <div className='header'>
                <img className="logo" src={logo} alt="" />
                <h1 className='title'>Instagram</h1>
            </div>
            <nav className='nav'>
                {
                    linkData.map((item) => {
                        return (
                            <div className='category'>
                                <h2 className='category-name'>{item.categoryName}</h2>
                                <div className='sub-items'>
                                    {item.subItems.map((subItem) => {
                                        return (
                                            <NavLink to={subItem.url}
                                                style={({ isActive }) => {
                                                    return {
                                                        backgroundColor: isActive ? "#3498db" : ""
                                                    }
                                                }
                                                }
                                                className='item' >
                                                <div className='item-icon'>
                                                    {subItem.icon}
                                                </div>
                                                <h3 className='item-name'>
                                                    {subItem.name}
                                                </h3>
                                            </NavLink>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </nav>
        </div>
    )
}
export default SideBar