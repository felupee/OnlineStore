import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      userEmail: '',
      inputRadio: '1',
      userComment: '',
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

  handleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { data, userEmail, inputRadio, userComment } = this.state;
    const evaluation = ['1', '2', '3', '4', '5'];
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

        <form>
          <label htmlFor="inputEmail">
            <input
              type="email"
              data-testid="product-detail-email"
              name="inputEmail"
              value={ userEmail }
              id={ userEmail }
              onChange={ this.handleChange }
            />
          </label>
          { evaluation
            .map((note, index) => (
              <label
                htmlFor={ `${note}-rating` }
                key={ index }
              >
                <input
                  data-testid={ `${index}-rating` }
                  type="radio"
                  onChange={ this.handleChange }
                  value={ note }
                  name={ inputRadio }
                />
              </label>))}
          <textarea
            data-testid="product-detail-evaluation"
            onChange={ this.handleChange }
            value={ userComment }
            name="userComment"
          />
          <button
            data-testid="submit-review-btn"
            type="submit"
            onClick={ this.saveComments }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
