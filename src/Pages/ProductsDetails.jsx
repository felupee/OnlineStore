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
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
