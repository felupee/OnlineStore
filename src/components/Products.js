import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('key'))) {
      localStorage.setItem('key', JSON.stringify([]));
    }
  }

  setLocalStorage = (produto) => {
    localStorage.setItem('key', JSON.stringify(produto));
  }

  addCart = () => {
    const { thumbnail, title, price, id } = this.props;
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
    const { thumbnail, title, price, id } = this.props;
    return (
      <section data-testid="product">
        <Link
          to={ `/product-details/${id}` }
          data-testid="product-detail-link"
        >
          <div>
            <img
              src={ thumbnail }
              alt={ title }
            />
            <p>{ title }</p>
            <span>{ price }</span>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.addCart }
        >
          Adicionar ao Carrinho
        </button>
      </section>
    );
  }
}

Products.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Products;
