import React from "react";
import "./cart.css";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart-container">
        {this.props.purchase.map(p => (
          <div className="cart">

            <div className="cart-image">
              <img src={p.image} alt="menu" />
            </div>
            <div className="cart-description">
              <h3 className="cart-name">{p.name}</h3>
              <div>{p.price}</div>
            </div>
          </div>
        ))}

      </div>
    );
  }
}

export default Cart;
