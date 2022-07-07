import React from 'react';

class InitialPage extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  render() {
    const { productList } = this.state;
    return (
      <section>
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
