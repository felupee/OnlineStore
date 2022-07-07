import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCategory from '../components/Button';
import { getCategories } from '../services/api';

class InitialPage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      categories: [],
    };
  }

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categories: data,
    });
  }

  render() {
    const { productList, categories } = this.state;
    return (
      <section>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho

        </Link>
        {
          categories.map((category) => (
            <ButtonCategory
              name={ category.name }
              key={ category.id }
            />
          ))
        }
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
