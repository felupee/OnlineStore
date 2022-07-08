import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../components/Products';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ItemsFromCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produtos: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { category } = params;
    const id = category;
    const produtos = await getProductsFromCategoryAndQuery(id);
    this.setState({
      produtos: produtos.results,
    });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div>
        {
          produtos.map((product) => <Products { ...product } key={ product.id } />)
        }
      </div>
    );
  }
}

ItemsFromCategories.propTypes = {
  match: PropTypes.shape().isRequired,
};
