import React from 'react';
import { Link } from 'react-router-dom';

class InitialPage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  render() {
    const { productList } = this.state;
    return (
      <section>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho

        </Link>
        {
          productList.length === 0 && (
            <h1
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>
          )
        }
      </section>
    );
  }
}

export default InitialPage;
