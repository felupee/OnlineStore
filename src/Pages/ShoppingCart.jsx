import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      quantity: 1,
    };
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('key'))) {
      localStorage.setItem('key', JSON.stringify([]));
    }
    const cart = JSON.parse(localStorage.getItem('key'));
    this.setState({ cart });
  }

  decreaseQuantity = () => {
    this.setState((prevState) => {
      this.setState({
        quantity: prevState.quantity - 1,
      });
    });
  }

  increaseQuantity = () => {
    this.setState((prevState) => {
      this.setState({
        quantity: prevState.quantity + 1,
      });
    });
  }

  // cart.map((item) => {
  //   const b = cart.filter((a) => a[3] === item[3]);
  //   return console.log(b, "-------");
  // })

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
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => this.decreaseQuantity(item[3]) }
                  >
                    -
                  </button>
                  <p data-testid="shopping-cart-product-quantity">
                    {
                      cart.filter((product) => product[3] === item[3]).length
                    }
                  </p>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    name={ item.title }
                    onClick={ () => this.increaseQuantity(item[3]) }
                  >
                    +
                  </button>
                </div>
              )))
        }
        <p>
          Quantidade:
          {cart.length}
        </p>
      </div>
    );
  }
}

export default ShoppingCart;
