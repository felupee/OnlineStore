import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductsDetails.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: [],
      userEmail: '',
      inputRadio: '1',
      userComment: '',
    };
  }

  async componentDidMount() {
    if (!JSON.parse(localStorage.getItem('key'))) {
      localStorage.setItem('key', JSON.stringify([]));
    }

    if (!JSON.parse(localStorage.getItem('comments'))) {
      localStorage.setItem('comments', JSON.stringify([]));
    }

    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const query = id;
    const response = await fetch(`https://api.mercadolibre.com/items/${query}`);
    const data = await response.json();
    const comments = JSON.parse(localStorage.getItem('comments'));
    this.setState({
      data,
      comments,
    });
  }

  setLocalStorage = (array, item) => {
    localStorage.setItem(`${item}`, JSON.stringify(array));
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
    this.setLocalStorage([...item, object], 'key');
  }

  handleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  addState = (object) => {
    this.setState((prevState) => this.setState({
      comments: [...prevState.comments, object],
      userEmail: '',
      userComment: '',
      inputRadio: '1',
    }));
  }

  saveComments = (event) => {
    event.preventDefault();
    const { userEmail, userComment, inputRadio } = this.state;
    const object = [
      userEmail,
      userComment,
      inputRadio,
    ];
    this.addState(object);
    const item = JSON.parse(localStorage.getItem('comments'));
    this.setLocalStorage([...item, object], 'comments');
  }

  render() {
    const { data, userEmail, userComment, comments } = this.state;
    return (
      <div className="main-details">
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <div className="product-datails" data-testid="product-detail-name">
          <img
            src={ data.thumbnail }
            alt={ data.title }
          />
          <p>{ data.title }</p>
          <span>{ data.price }</span>
          <p>{ data.condition }</p>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.addCart }
          >
            Adicionar ao Carrinho
          </button>
        </div>

        <form className="form-avaliacao">
          <p>Adicione um comentário</p>
          Email:
          <label htmlFor="userEmail">
            <input
              type="email"
              data-testid="product-detail-email"
              name="userEmail"
              value={ userEmail }
              id={ userEmail }
              onChange={ this.handleChange }
            />
          </label>
          Comentário:
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
        <section className="comentarios">
          {
            comments.length > 0 && (
              comments.map((comment) => (
                <div key={ comment }>
                  <p>{ comment[0] }</p>
                  <p>{ comment[1] }</p>
                </div>
              ))
            )
          }
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
