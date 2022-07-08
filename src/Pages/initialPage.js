import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCategory from '../components/Button';
import Products from '../components/Products';
import { getCategories } from '../services/api';

class InitialPage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      categories: [],
      query: '',
      search: true,
      error: false,
    };
  }

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categories: data,
    });
  }

  handleQuery = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  handleButton = async () => {
    const { query } = this.state;
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json();
    this.setState({
      productList: data.results,
      search: false,
    });
    if (data.results.length === 0) {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { productList, categories, query, search, error } = this.state;
    return (
      <section>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho

        </Link>
        <input
          type="text"
          data-testid="query-input"
          name="query"
          value={ query }
          onChange={ this.handleQuery }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleButton }
        >
          Pesquisar
        </button>
        {
          categories.map((category) => (
            <ButtonCategory
              name={ category.name }
              id={ category.id }
              key={ category.id }
            />
          ))
        }
        {
          search && (
            <h1
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h1>
          )
        }
        {
          error ? <h1>Nenhum produto foi encontrado</h1>
            : (
              <section>
                {
                  productList.map((product) => (
                    <Products
                      id={ product.id }
                      key={ product.id }
                      title={ product.title }
                      price={ product.price }
                      thumbnail={ product.thumbnail }
                    />
                  ))
                }
              </section>
            )
        }
      </section>
    );
  }
}

export default InitialPage;
