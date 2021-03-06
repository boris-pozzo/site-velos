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
      cartContainer: [],
      showComponent: false
    };
  }

  add(product) {
    const arr = this.state.cartContainer;
    const index = arr.indexOf(product);
    if (index === -1) {
      //si le tableau ne contient pas le produit
      arr.push(product);
      this.setState({ cartContainer: arr }); //je l'ajoute au tableau
    } else {
      arr[index].count++; // j'incrémente la quantité de mon produit
      arr[index].total = arr[index].price * arr[index].count;
      this.setState({ cartContainer: arr }); //et je mets à jours mon state pour qu'il puisse prendre en compte sa nouvelle valeur
    }
  }

  delete(product) {
    const arr = this.state.cartContainer;
    const index = arr.indexOf(product);

    if (arr.length < 1) {
      arr[index].count--;
    } else {
      arr.splice(index, 1);
    }
    this.setState({ cartContainer: arr });

    // arr.map((produit, i) => {
    //   arr
    //   if (produit) {
    //     arr[index].count--;
    //     this.setState({ cartContainer: arr });
    //   }
    // });
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
          ? <Cart
              cartContainer={this.state.cartContainer}
              delete={this.delete.bind(this)}
            />
          : false}
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
