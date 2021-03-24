import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={`${s.navbar}`}>
            <div className={`${s.link}`}>
                <NavLink to="/pre-junior" activeClassName={s.activeLink}>Pre Junior</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/junior" activeClassName={s.activeLink}>Junior</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to="/junior-plus" activeClassName={s.activeLink}>Junior Plus</NavLink>
            </div>
            <div className={s.block}> Menu</div>
        </div>
    );
}

export default Header;
