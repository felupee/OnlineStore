import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('key'));
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    console.log(cart);
    return (
      <div>
        {
          cart.length === 0
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              cart.map((item) => (
                <div key={ item }>
                  <p data-testid="shopping-cart-product-name">{item[1]}</p>
                  <p>{item[2]}</p>
                </div>
              ))
            )
        }
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {cart.length}
        </p>
      </div>
    );
  }
}

export default ShoppingCart;
