import React from "react";
import "./product.css";

class Products extends React.Component {
  initClick() {
    this.props.add(this.props.product);
  }
  render() {
    return (
      <div className="product-container">
        <div className="img-container">
          <img src={this.props.product.image} alt="photo-produit" />
        </div>
        <div className="button-container">
          <div className="button" onClick={this.initClick.bind(this)}>Buy</div>
        </div>

        <div className="description-container">
          <h1>{this.props.product.name}</h1>
          <p>{this.props.product.price}</p>
        </div>
      </div>
    );
  }
}

export default Products;
