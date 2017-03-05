import React from "react";
import "./menu.css";

class Menu extends React.Component {
  initCart() {
    this.props.openCart(this.props.showComponent);
  }

  render() {
    return (
      <div className="menu-container">

        <div className="navbar flex">
          <div className="logo">Logo</div>
          <ul className="items flex">
            <li className="item">Vélos</li>
            <li className="item">La marque</li>
            <li className="item">Contact</li>
            <li className="item">
              <button onClick={this.initCart.bind(this)}>Cart</button>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Menu;
