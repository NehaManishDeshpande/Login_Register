import React from "react";

function Cart({ cart }) {
    return (
        <div>
            <h2>Cart</h2>
            {cart.map((item, index) => (
                <div key={index}>{/* JSX for displaying item */}</div>
            ))}
        </div>
    );
}

export default Cart;
