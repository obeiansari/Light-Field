import React, { useState } from 'react';
import './sidebar.css';
import sidebarLogo from '../../assets/images/sidebar/sidebar-logo.svg';
import home from '../../assets/images/sidebar/home.svg';
import order from '../../assets/images/sidebar/order.svg';
import delivery from '../../assets/images/sidebar/delivery.svg';
import products from '../../assets/images/sidebar/products.svg';
import payment from '../../assets/images/sidebar/payment.svg';
import tool from '../../assets/images/sidebar/tool.svg';
import discount from '../../assets/images/sidebar/discount.svg';
import marketing from '../../assets/images/sidebar/marketing.svg';
import customer from '../../assets/images/sidebar/customer.svg';
import appearance from '../../assets/images/sidebar/appearance.svg';
import plugin from '../../assets/images/sidebar/plugin.svg';
import footerWallet from '../../assets/images/sidebar/footer-wallet.svg';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(5);

    const clickHandler = (index) => {
        setActiveItem(index);
    };

    const sidebarItems = [
        { icon: home, label: 'Home' },
        { icon: order, label: 'Orders' },
        { icon: delivery, label: 'Delivery' },
        { icon: products, label: 'Products' },
        { icon: marketing, label: 'Marketing' },
        { icon: payment, label: 'Payments' },
        { icon: tool, label: 'Tools' },
        { icon: discount, label: 'Discounts' },
        { icon: customer, label: 'Customers' },
        { icon: appearance, label: 'Appearance' },
        { icon: plugin, label: 'Plugins' },
    ];

    return (
        <div className="aside-bar">
            <img className="sidebarLogo" src={sidebarLogo} alt="Sidebar Logo" />
            <ul>
                {sidebarItems.map((item, index) => (
                    <li
                        key={index}
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => clickHandler(index)}
                    >
                        <img src={item.icon} alt={item.label} />
                        {item.label}
                        {item.label === 'Orders' && <span className='notification'>3</span>}
                    </li>
                ))}
            </ul>
            <div className="sidebar-footer">
                <div className='sidebar-footer-image-conainer'>
                    <img className="footer-wallet" src={footerWallet} alt="Footer Wallet" />
                </div>
                <div className="sidebar-footer-content">
                    <label className="footer-label-content">Available credits</label>
                    <span className='footer-label-content-price'>222.10</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
