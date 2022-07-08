import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends React.Component {
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
