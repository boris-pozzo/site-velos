import React from "react";
import "./product.css";

class Products extends React.Component {
  initClick() {
    this.props.add(this.props.product);
  }
  render() {
    return (
      <div className="product-container">
        <div className="product">
          <div className="image" />
        </div>
        <div className="button" onClick={this.initClick.bind(this)}>Buy</div>
        <div className="description-container">
          <h1>{this.props.product.name}</h1>
          <p>{this.props.product.price}</p>
        </div>
      </div>
    );
  }
}

export default Products;
