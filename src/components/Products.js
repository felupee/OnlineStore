import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { thumbnail, title, price } = this.props;
    return (
      <section data-testid="product">
        <img
          src={ thumbnail }
          alt={ title }
        />
        <p>{ title }</p>
        <span>{ price }</span>
      </section>
    );
  }
}

Products.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Products;
