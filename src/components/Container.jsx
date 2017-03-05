import React from "react";
import Menu from "./menu/Menu";
import contenu from "./data.js";
import Products from "./product/Products";
import Cart from "./cart/Cart";
import "./style.css";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: contenu.carte,
      purchase: [],
      showComponent: false
    };
  }

  add(product) {
    let arr = this.state.purchase;
    arr.push(product);
    this.setState({ purchase: arr });
  }

  openCart() {
    this.setState({
      showComponent: !this.state.showComponent
    });
  }

  render() {
    return (
      <div>
        <Menu openCart={this.openCart.bind(this)} />
        {this.state.showComponent
          ? <Cart purchase={this.state.purchase} />
          : null}
        <div className="flex">
          {this.state.products.map((produit, i) => {
            return (
              <Products key={i} product={produit} add={this.add.bind(this)} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Container;
