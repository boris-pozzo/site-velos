import React from "react";
import "./cart.css";

class Cart extends React.Component {
  initDelete(product) {
    const arr = this.state.cartContainer;
    const index = arr.indexOf(product);
    console.log(index);
    //this.props.delete(this.props.name);
  }

  render() {
    return (
      <div className="cart-container">

        {this.props.cartContainer.length === 0
          ? <p>Votre panier est vide</p>
          : this.props.cartContainer.map((p, i) => (
              <div className="cart" key={i}>

                <div className="cart-image">
                  <img src={p.image} alt={p.name} key={i} />
                </div>
                <div className="cart-description">
                  <h3 className="cart-name">{p.name}</h3>
                  <div>Prix unit : {p.price} €</div>
                  <div>Quantité : {p.count}</div>
                  <div>Total : {p.total} €</div>
                  <button onClick={this.initDelete.bind(this)} />
                </div>
              </div>
            ))}

      </div>
    );
  }
}

export default Cart;
