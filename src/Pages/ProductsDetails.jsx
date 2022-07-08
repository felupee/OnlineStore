import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    if (!JSON.parse(localStorage.getItem('key'))) {
      localStorage.setItem('key', JSON.stringify([]));
    }

    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const query = id;
    const response = await fetch(`https://api.mercadolibre.com/items/${query}`);
    const data = await response.json();
    this.setState({
      data,
    });
  }

  setLocalStorage = (produto) => {
    localStorage.setItem('key', JSON.stringify(produto));
  }

  addCart = () => {
    const { data } = this.state;
    const { thumbnail, title, price, id } = data;
    const object = [
      thumbnail,
      title,
      price,
      id,
    ];
    const item = JSON.parse(localStorage.getItem('key'));
    this.setLocalStorage([...item, object]);
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho

        </Link>
        <div data-testid="product-detail-name">
          <img
            src={ data.thumbnail }
            alt={ data.title }
          />
          <p>{ data.title }</p>
          <span>{ data.price }</span>
          <p>{ data.condition }</p>
        </div>

        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
