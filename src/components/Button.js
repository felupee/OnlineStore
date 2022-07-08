import PropTypes from 'prop-types';
import React from 'react';

class ButtonCategory extends React.Component {
  render() {
    const { name, id, redireciona } = this.props;

    return (
      <button data-testid="category" onClick={ () => redireciona(id) } type="button">
        {name}
      </button>
    );
  }
}

ButtonCategory.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  redireciona: PropTypes.func.isRequired,
};

export default ButtonCategory;
