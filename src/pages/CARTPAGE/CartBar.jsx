import React from "react";
import { Link } from "react-router-dom";

export const CartBar = () => {
    return (
        <>
            <div className="cartbar">
                <div className="Navigate-bar">
                    <h1>Cart Page...</h1>

                    <li className="navigate-list">
                        <Link to={'/'}><span>Home</span></Link>
                        <Link to={'/'}><span>Saved</span></Link>
                        <Link to={'/'}><span>Account</span></Link>
                    </li>
                </div>
            </div>
        </>
    )
}