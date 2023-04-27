import React from 'react';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('key'))) {
      localStorage.setItem('key', JSON.stringify([]));
    }
    const cart = JSON.parse(localStorage.getItem('key'));
    this.setState({ cart });
  }

  render() {
    const { cart } = this.state;
    console.log(cart);
    return (
      <div className="main2">
        {
          cart.length === 0
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              cart.map((item) => (
                <div className="itemcarrinho" key={ item }>
                  <p data-testid="shopping-cart-product-name">{item[1]}</p>
                  <p>
                    Preço: R$
                    {item[2]}
                  </p>
                </div>
              )))
        }
        <p className="quantidade">
          Quantidade:
          {cart.length}
        </p>
        <button type="button">Finalizar compra</button>
      </div>
    );
  }
}

export default ShoppingCart;
